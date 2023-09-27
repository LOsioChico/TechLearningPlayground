'use client'
import { useLoginForm } from '@/hooks/useLoginForm'
import { ThreeDots } from '../loaders/ThreeDots'

export const LoginModal = () => {
  const { onSubmit, register, isSubmitting } = useLoginForm()

  return (
    <form
      className='bg-darkGray flex w-[480px] flex-col rounded-md p-8 text-center'
      onSubmit={onSubmit}
    >
      <header>
        <h1 className='text-lightGray mb-2 text-2xl font-semibold'>
          Welcome back!
        </h1>
        <p className='text-normalGray text-base'>
          We{"'"}re so excited to see you again!
        </p>
      </header>

      <div className='mt-5 flex flex-col'>
        <div className='mb-5 flex flex-col'>
          <label
            htmlFor='email'
            className='text-normalGray mb-2 text-left text-xs font-bold uppercase'
          >
            Email or Phone Number <span className='text-red'>*</span>
          </label>
          <input
            type='text'
            id='email'
            className='bg-inputBackground rounded-sm p-2 outline-none'
            {...register('email')}
          />
        </div>
        <div className='flex flex-col'>
          <label
            htmlFor='password'
            className='text-normalGray mb-2 text-left text-xs font-bold uppercase'
          >
            Password <span className='text-red'>*</span>
          </label>

          <input
            type='password'
            id='password'
            className='bg-inputBackground rounded-sm p-2 outline-none'
            {...register('password')}
          />
        </div>
      </div>

      <button className='text-textLink mb-5 mt-1 self-start text-sm font-medium'>
        Forgot your password?
      </button>

      <button
        className='bg-burple hover:bg-burpleHover active:bg-burpleActive mb-2 flex items-center justify-center rounded-sm
        py-4 font-medium text-white transition-colors duration-200 ease-in-out'
        type='submit'
      >
        {isSubmitting ? <ThreeDots /> : 'Log In'}
      </button>

      <span className='self-start text-sm font-medium text-[#949ba4]'>
        Need an account? <button className='text-textLink'>Register</button>
      </span>
    </form>
  )
}
