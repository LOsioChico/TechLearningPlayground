import { useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'

interface SidebarMouseProps {
  isInMenu: boolean
}

export const SidebarMouse: React.FC<SidebarMouseProps> = ({ isInMenu }) => {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (isInMenu) return
      const x = e.clientX - 30
      const y = e.clientY - 30
      cursorX.set(x)
      cursorY.set(y)
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInMenu])

  return (
    <>
      <AnimatePresence>
        {!isInMenu && (
          <motion.div
            className='bg-primary background mouse fixed left-0 top-0 z-40 h-16 w-16 cursor-none rounded-full'
            style={{
              x: cursorX,
              y: cursorY,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0 }}
          >
            <IoMdClose className='text-darkLight absolute left-4 top-4 text-3xl' />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
