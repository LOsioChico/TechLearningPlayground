import './globals.css'
import type { Metadata } from 'next'

import { VaraText } from '@/components/VaraText'
import { Nunito } from 'next/font/google'
import { VscMenu } from 'react-icons/vsc'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxury Agency',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='bg-dark fixed flex w-full items-center justify-center opacity-90'>
          <div className='text-primary flex h-24 w-full max-w-[1200px] items-center justify-between px-[2.5%]'>
            <div className='mt-4 cursor-pointer select-none text-2xl font-extrabold uppercase tracking-tighter'>
              <VaraText text='Luxury Agency' />
            </div>
            <VscMenu className='cursor-pointer duration-300' size={40} />
          </div>
        </nav>
        <div className='bg-dark h-24' />
        {children}
      </body>
    </html>
  )
}
