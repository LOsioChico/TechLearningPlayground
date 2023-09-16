import ScrollDown from '../../public/ScrollDown'
import scribbleCircle from '../../public/scribble-circle.png'
import { useTranslations } from '@/hooks/useTranslations'
import { Button } from '@/components/Button'
import OFLogo from '../../public/OFLogo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HomePage = () => {
  const { t } = useTranslations()

  return (
    <>
      <section className='bg-dark fixed flex h-screen w-full flex-col items-center justify-center'>
        <div className='flex h-screen w-full max-w-[1200px] flex-col items-start justify-center px-[5%] text-7xl font-extrabold uppercase sm:text-8xl md:text-9xl'>
          <motion.span
            className='relative w-full text-center lg:w-4/5'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeInOut' }}
          >
            Breaking
          </motion.span>
          <motion.span
            className='relative w-full text-center lg:w-4/5'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeInOut' }}
          >
            Top 0.1%
            <motion.span className='absolute -bottom-2 left-1/2 -translate-x-1/2 transform'>
              <Image
                src={scribbleCircle}
                alt='scribble-circle'
                className='w-[400px] max-w-none sm:w-[520px] md:w-[700px]'
              />
            </motion.span>
          </motion.span>
          <motion.span
            className='flex w-full items-center justify-center gap-4 lg:w-4/5'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: 'easeInOut' }}
          >
            On
            <Image src={OFLogo} alt='OnlyFans' width={180} height={120} />
          </motion.span>
        </div>

        <motion.div
          className='text-primary flex h-24 w-full max-w-[1200px] items-center justify-between  px-[2.5%] pb-12'
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: 'easeInOut' }}
        >
          <div className='flex flex-col items-center justify-center gap-1 opacity-50'>
            <ScrollDown />
          </div>
          <Button text={t.BecomeAModel} />
        </motion.div>
      </section>
      <div className='h-screen' />
      <div className='bg-darkLight absolute z-10 flex min-h-screen w-full flex-col items-center justify-center'></div>
    </>
  )
}

export default HomePage
