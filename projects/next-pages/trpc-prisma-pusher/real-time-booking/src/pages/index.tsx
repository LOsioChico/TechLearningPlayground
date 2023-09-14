import { api } from '@/utils/api'
import { BusCard } from '@/components/BusCard'
import { ImSpinner9 } from 'react-icons/im'
import { CreateBusButton } from '@/components/CreateBusButton'

export default function Home() {
  const { data: buses, isLoading } = api.bus.getBuses.useQuery()

  return (
    <>
      {isLoading && (
        <ImSpinner9 size={50} color='white' className='animate-spin' />
      )}
      {!isLoading && (
        <div className='grid min-h-screen w-full grid-cols-4'>
          {buses?.map((bus) => <BusCard key={bus.id} bus={bus} />)}
        </div>
      )}

      <CreateBusButton />
    </>
  )
}
