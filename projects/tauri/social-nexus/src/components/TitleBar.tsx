export const TitleBar = () => {
  return (
    <div className='flex justify-between'>
      <div className='pl-2'>SocialNexus</div>
      <div className='flex'>
        <button className='px-2 hover:bg-white'>-</button>
        <button className='px-2 hover:bg-white'>[]</button>
        <button className='px-2 hover:bg-white'>x</button>
      </div>
    </div>
  )
}
