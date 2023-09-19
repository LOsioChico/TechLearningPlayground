import { useEffect } from 'react'
import Pusher from 'pusher-js'
import { env } from '@/env.mjs'
import { api } from '@/utils/api'

export const usePusherHandlers = () => {
  const utils = api.useContext()

  useEffect(() => {
    const pusher = new Pusher(env.NEXT_PUBLIC_PUSHER_APP_KEY, {
      cluster: env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
    })

    const channel = pusher.subscribe('real-time-booking')

    channel.bind('booked-seat', () => {
      void utils.bus.getBookedSeats.invalidate()
    })

    return () => {
      pusher.unsubscribe('real-time-booking')
      channel.unbind('booked-seat')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
