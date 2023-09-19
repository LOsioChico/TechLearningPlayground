import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import Pusher from 'pusher'
import { env } from '@/env.mjs'

export const busRouter = createTRPCRouter({
  getBuses: publicProcedure.query(({ ctx }) => {
    return ctx.db.bus.findMany()
  }),
  getBus: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.bus.findUnique({
        where: {
          id: input.id,
        },
      })
    }),
  bookSeat: publicProcedure
    .input(
      z.object({
        busId: z.number(),
        seatNumber: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const response = await ctx.db.bookedSeats.create({
        data: {
          busId: input.busId,
          number: input.seatNumber,
        },
      })

      const pusher = new Pusher({
        appId: env.PUSHER_APP_ID,
        key: env.PUSHER_APP_KEY,
        secret: env.PUSHER_APP_SECRET,
        cluster: env.PUSHER_APP_CLUSTER,
        useTLS: true,
      })

      await pusher.trigger('real-time-booking', 'booked-seat', {})

      return response
    }),
  getBookedSeats: publicProcedure
    .input(
      z.object({
        busId: z.number(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const response = await ctx.db.bookedSeats.findMany({
        where: {
          busId: input.busId,
        },
      })

      return response.map((seat) => seat.number)
    }),
})
