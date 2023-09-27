'use client'
import { motion } from 'framer-motion'

export const ThreeDots = () => {
  return (
    <div className='flex items-center'>
      <motion.div
        className='mr-0.5 h-[7px] w-[7px] rounded-full bg-white'
        animate={{ opacity: [0.5, 1], scale: [0.75, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.7,
          ease: 'easeInOut',
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className='mr-0.5 h-[7px] w-[7px] rounded-full bg-white'
        animate={{ opacity: [0.5, 1], scale: [0.75, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.7,
          ease: 'easeInOut',
          repeatType: 'reverse',
          delay: 0.2,
        }}
      />
      <motion.div
        className='h-[7px] w-[7px] rounded-full bg-white'
        animate={{ opacity: [0.5, 1], scale: [0.75, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.7,
          ease: 'easeInOut',
          repeatType: 'reverse',
          delay: 0.4,
        }}
      />
    </div>
  )
}
