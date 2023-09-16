import { motion } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps {
  text: string
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <motion.div
      className='text-dark cursor-pointer rounded-xl bg-white px-10 py-5 text-sm font-semibold uppercase duration-300 hover:opacity-80'
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href='/'>{text}</Link>
    </motion.div>
  )
}
