import { useRouter } from 'next/router'

export const CreateBusButton = () => {
  const router = useRouter()

  return (
    <div className='absolute bottom-0 right-0 m-4'>
      <button
        onClick={() => {
          void router.push('/create-bus')
        }}
        className='rounded-full bg-white p-4 font-medium'
      >
        Create Bus
      </button>
    </div>
  )
}
