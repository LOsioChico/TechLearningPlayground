import { useState } from 'react'
import { useRouter } from 'next/router'
import { api } from '@/utils/api'
import { usePusherHandlers } from 'hooks'

import { BusSeats } from '@/components/BusSeats'

import { toast } from 'sonner'
import Image from 'next/image'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiFillCloseCircle } from 'react-icons/ai'

const BusPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null)

  const bookedSeats = api.bus.getBookedSeats.useQuery(
    { busId: Number(id) },
    {
      enabled: id !== undefined,
    },
  )

  const bookSeatMutation = api.bus.bookSeat.useMutation()
  const handleBookSeat = () => {
    if (!selectedSeat) {
      return toast.error('Please select a seat')
    }

    bookSeatMutation.mutate(
      {
        busId: Number(id),
        seatNumber: selectedSeat,
      },
      {
        onSuccess: () => {
          toast.success(`Seat ${selectedSeat} booked`)
          setSelectedSeat(null)
        },
        onError: (err) => {
          toast.error(err.message)
        },
      },
    )
  }

  const { data: busData } = api.bus.getBus.useQuery(
    { id: Number(id) },
    {
      enabled: id !== undefined,
    },
  )

  usePusherHandlers()

  if (!busData) {
    return null
  }

  return (
    <div className='container relative mx-auto mt-5 flex flex-col items-center rounded-xl bg-white py-12 md:flex-row'>
      <div className='absolute right-0 top-0 mr-5 mt-5'>
        <AiFillCloseCircle
          className='cursor-pointer text-3xl text-indigo-500'
          onClick={() => {
            void router.push('/')
          }}
        />
      </div>
      <div className='mx-auto max-w-md text-center md:max-w-2xl'>
        <h2 className='mb-14 flex flex-col border-b border-[#eca74e4f] pb-2 text-2xl font-bold md:flex-row md:items-center md:justify-center'>
          <span>Real Time Booking</span>
          <span className='md:ml-2'>
            <a
              href='https://github.com/LOsioChico'
              target='_blank'
              className='text-indigo-500'
              rel='noreferrer'
            >
              Luis Osio Chico
            </a>
          </span>
        </h2>

        <div className='flex flex-col items-center justify-center gap-4'>
          <Image
            src='https://o.remove.bg/downloads/55038e0a-062e-4613-b9a4-dcabbe1f3886/Untitled-removebg-preview.png'
            alt='Bus'
            className='mx-auto h-48 w-48 md:h-full md:w-64'
            width={300}
            height={300}
            priority
          />
          <div className='flex flex-col items-center justify-center gap-2'>
            <span className='flex items-center justify-center gap-2 text-2xl font-bold'>
              {busData?.origin}{' '}
              <BsFillArrowRightCircleFill
                className='text-indigo-500'
                size={18}
              />{' '}
              {busData?.destination}
            </span>
          </div>
          <div
            className={`flex flex-col items-center justify-center gap-2 transition-all duration-500
          ${selectedSeat ? 'opacity-1' : 'opacity-0'}`}
          >
            <span className='flex items-center justify-center gap-2 text-2xl font-bold text-indigo-500'>
              Selected Seat: <span className='text-black'>{selectedSeat}</span>
            </span>
          </div>
        </div>
      </div>
      <div className=' mx-auto mt-5 w-1/2 md:ml-5 md:mt-0'>
        <div className='mx-auto mb-5 max-w-md overflow-hidden rounded-xl bg-white shadow-md'>
          <div className='px-6 py-4'>
            <div className='flex items-center justify-center gap-20'>
              <div className='flex flex-col items-center justify-center'>
                <div className='round-r-xl round-l-xl } flex h-14 w-14 items-center justify-center rounded-t-xl bg-green-400 text-lg font-semibold text-white' />
                <span className='select-none text-sm'>Available</span>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='round-r-xl round-l-xl } flex h-14 w-14 items-center justify-center rounded-t-xl bg-red-400 text-lg font-semibold text-white' />
                <span className='select-none text-sm'>Booked</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' mx-auto overflow-hidden rounded-xl bg-white shadow-md'>
          <div className='px-6 py-4'>
            <div className='flex flex-col items-center justify-center'>
              <div className='w-96 rounded-lg rounded-t-[80px] border-b-[12px] border-t-[12px] bg-stone-100 p-4'>
                <div className='flex justify-around'>
                  <BusSeats
                    bookedSeats={bookedSeats?.data}
                    setSelectedSeat={setSelectedSeat}
                    seats={busData.seats}
                  />
                </div>
              </div>
              <button
                className='mt-6 rounded bg-indigo-600 px-7 py-2 text-white'
                onClick={handleBookSeat}
              >
                Book Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusPage
