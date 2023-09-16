import { useState } from 'react'
import { useSidebarMenuStore } from '@/stores/store'
import { useTranslations } from '@/hooks/useTranslations'
import { sidebarLinks } from '@/constants/sidebarLinks'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { SidebarMouse } from './SidebarMouse'

export const SidebarMenu = () => {
  const { close, isOpen } = useSidebarMenuStore()
  const [isInMenu, setIsInMenu] = useState(false)
  const { t } = useTranslations()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className='bg-dark fixed z-30 h-screen w-screen'
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <SidebarMouse isInMenu={isInMenu} />
          <div className='flex h-screen items-center justify-center'>
            <aside className='relative z-50 flex w-screen cursor-pointer flex-col items-center justify-center divide-y divide-[#222527] overflow-hidden text-center text-7xl font-bold uppercase'>
              <div className='w-full' />
              {sidebarLinks.map(({ href, label }) => (
                <Link
                  href={href}
                  key={href}
                  className='bg-dark group relative w-full overflow-hidden'
                  onClick={close}
                  onMouseEnter={() => setIsInMenu(true)}
                  onMouseLeave={() => setIsInMenu(false)}
                >
                  <div className='bg-primary absolute top-0 h-full w-full -translate-y-[105px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100' />
                  <div className='relative p-4 transition-all duration-300 group-hover:text-white'>
                    {t[label]}
                  </div>
                </Link>
              ))}

              <div className='w-full' />
            </aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
