import ScrollDown from '../../public/ScrollDown'

const HomePage = () => {
  return (
    <section className='bg-dark h-screen'>
      <div className='absolute bottom-4 left-12 flex flex-col items-center justify-center gap-1 opacity-50'>
        <ScrollDown />
        <span>Scroll Down</span>
      </div>
      <div className='flex h-full flex-col items-center justify-center'></div>
    </section>
  )
}

export default HomePage
