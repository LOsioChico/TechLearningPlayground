import Link from 'next/link'

export const CreateBusButton = () => {
  return (
    <div className='absolute bottom-0 right-0 m-4'>
      <Link
        className='rounded-full bg-white p-4 font-medium'
        href='/create-bus'
      >
        Create Bus
      </Link>
    </div>
  )
}
