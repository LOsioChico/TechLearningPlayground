import Head from 'next/head'

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Time Booking</title>
        <meta name='description' content='Real Time Booking' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='relative flex h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
        {children}
      </main>
    </>
  )
}
