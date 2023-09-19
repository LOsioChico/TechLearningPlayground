import { useState, useEffect } from 'react'
import { BusSeat } from './BusSeat'

interface BusSeatsProps {
  setSelectedSeat: (seat: number) => void
  seats: number
  bookedSeats: number[] | undefined
}

export const BusSeats: React.FC<BusSeatsProps> = ({
  seats,
  setSelectedSeat,
  bookedSeats,
}) => {
  const [leftSeats, setLeftSeats] = useState<number[]>([])
  const [rightSeats, setRightSeats] = useState<number[]>([])

  useEffect(() => {
    const seatsAmount = Array.from({ length: seats }, (_, i) => i + 1)
    const left = seatsAmount.slice(0, seatsAmount.length / 2)
    const right = seatsAmount.slice(seatsAmount.length / 2, seatsAmount.length)
    setLeftSeats(left)
    setRightSeats(right)
  }, [seats])

  return (
    <>
      <BusSeat
        seats={leftSeats}
        setSelectedSeat={setSelectedSeat}
        bookedSeats={bookedSeats}
      />
      <BusSeat
        seats={rightSeats}
        setSelectedSeat={setSelectedSeat}
        bookedSeats={bookedSeats}
      />
    </>
  )
}
