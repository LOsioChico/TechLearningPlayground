import { type Bus } from '@prisma/client'
import { BiArrowBack, BiSolidTrain } from 'react-icons/bi'
import Link from 'next/link'

export interface BusCardProps {
  bus: Bus
}

export const BusCard: React.FC<BusCardProps> = ({ bus }) => {
  return (
    <Link
      key={bus.id}
      className='m-4 flex max-h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-white p-4 duration-300 hover:scale-95 hover:bg-gray-100'
      href={`/bus/${bus.id}`}
    >
      <BiSolidTrain className='text-4xl' />
      <div className='flex items-center gap-3'>
        <div className='text-xl font-bold'>{bus.origin}</div>
        <BiArrowBack className='rotate-180 text-2xl' />
        <div className='text-xl font-bold'>{bus.destination}</div>
      </div>
      <div className='text-xl font-bold'>{bus.seats} seats</div>
    </Link>
  )
}
