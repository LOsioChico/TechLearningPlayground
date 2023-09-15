import { VaraText } from '@/components/VaraText'
import { VscMenu } from 'react-icons/vsc'
import { motion } from 'framer-motion'

import { useRouter } from 'next/router'
import { useSidebarMenuStore } from '@/stores/store'
import { SidebarMenu } from './SidebarMenu'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter()
  const { open } = useSidebarMenuStore()

  return (
    <>
      <SidebarMenu />
      <nav className='bg-dark fixed flex w-full items-center justify-center opacity-90'>
        <div className='text-primary flex h-24 w-full max-w-[1200px] items-center justify-between px-[2.5%]'>
          <div
            className='mt-4 cursor-pointer select-none text-2xl font-extrabold uppercase tracking-tighter'
            onClick={() => {
              void router.push('/')
            }}
          >
            <VaraText text='Luxury Agency' />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={open}
          >
            <VscMenu className='cursor-pointer duration-300' size={40} />
          </motion.div>
        </div>
      </nav>
      {children}
    </>
  )
}
