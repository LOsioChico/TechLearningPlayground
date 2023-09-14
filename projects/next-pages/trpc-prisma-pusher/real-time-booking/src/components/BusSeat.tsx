import { toast } from 'sonner'

interface BusSeatsProps {
  setSelectedSeat: (seat: number) => void
  seats: number[]
  bookedSeats: number[] | undefined
}

export const BusSeat: React.FC<BusSeatsProps> = ({
  seats,
  setSelectedSeat,
  bookedSeats,
}) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {seats.map((seat) => {
        const booked = bookedSeats?.includes(seat)

        return (
          <div
            key={seat}
            className={`flex h-14 w-14 select-none items-center justify-center rounded-t-xl text-lg font-semibold text-white transition-all duration-500
          ${
            booked
              ? 'cursor-not-allowed bg-red-400'
              : 'cursor-pointer bg-green-400'
          }
          `}
            onClick={() => {
              if (booked) {
                toast.error(`Seat ${seat} is already booked`)
                return
              }
              setSelectedSeat(seat)
            }}
          >
            {seat}
          </div>
        )
      })}
    </div>
  )
}
