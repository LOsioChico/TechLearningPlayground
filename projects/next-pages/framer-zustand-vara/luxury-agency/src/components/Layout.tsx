import { VaraText } from '@/components/VaraText'
import { VscMenu } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { TbWorld } from 'react-icons/tb'

import { useTranslations } from '@/hooks/useTranslations'
import { useSidebarMenuStore } from '@/stores/store'
import { SidebarMenu } from './SidebarMenu'

import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslations()
  const { open } = useSidebarMenuStore()

  return (
    <>
      <SidebarMenu />
      <nav className='bg-dark fixed z-20 flex w-full items-center justify-center opacity-90'>
        <header className='text-primary flex h-24 w-full max-w-[1200px] items-center justify-between px-[2.5%]'>
          <Link
            className='mt-4 cursor-pointer select-none text-2xl font-extrabold uppercase tracking-tighter'
            href='/'
          >
            <VaraText text='Luxury Agency' />
          </Link>
          <div className='flex gap-6'>
            <motion.div
              className='text-primary flex w-16 cursor-pointer items-center justify-center gap-1 rounded-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/'
                className='flex items-center justify-center gap-1'
                locale={t.Locale === 'EN' ? 'es' : 'en'}
              >
                <TbWorld className='text-3xl' />
                <span className='font-bold uppercase'>{t.Locale}</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={open}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <VscMenu className='cursor-pointer duration-300' size={40} />
            </motion.div>
          </div>
        </header>
      </nav>
      {children}
    </>
  )
}
