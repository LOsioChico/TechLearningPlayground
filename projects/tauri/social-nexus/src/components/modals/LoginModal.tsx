'use client'
import { useState } from 'react'
import { ThreeDots } from '../loaders/ThreeDots'
import { loginSchema, forgotPasswordSchema } from '@/schemas'
import { supabase } from '@/lib/supabase'

export const LoginModal = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isForgotPasswordError, setIsForgotPasswordError] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsForgotPasswordError(false)
    setIsSubmitting(true)
    setIsError(false)

    try {
      loginSchema.parse(inputs)
    } catch (err) {
      setIsError(true)
      setIsSubmitting(false)
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword(inputs)

    if (error) {
      setIsError(true)
      setIsSubmitting(false)
      return
    }

    console.log(data)
  }

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value })
  }

  const handleForgotPassword = () => {
    try {
      forgotPasswordSchema.parse({
        email: inputs.email,
      })
      setIsForgotPasswordError(false)
    } catch (err) {
      setIsForgotPasswordError(true)
      return
    }

    void supabase.auth.resetPasswordForEmail(inputs.email)
  }

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

      <div className='mt-5 flex flex-col tracking-[0.02em]'>
        <div className='mb-5 flex flex-col'>
          {!isError && !isForgotPasswordError && (
            <label
              htmlFor='email'
              className='text-normalGray mb-2 text-left text-xs font-bold uppercase'
            >
              Email or Phone Number <span className='text-red'>*</span>
            </label>
          )}

          {isForgotPasswordError && (
            <label
              htmlFor='email'
              className='text-danger mb-2 text-left text-xs font-bold'
            >
              <span className='uppercase'>Email or Phone Number</span>
              <span className='font-normal italic'>
                {' '}
                - This field is required.
              </span>
            </label>
          )}

          {isError && (
            <label
              htmlFor='email'
              className='text-danger mb-2 text-left text-xs font-bold'
            >
              <span className='uppercase'>Email or Phone Number</span>
              <span className='font-normal italic'>
                {' '}
                - Login or password is invalid.
              </span>
            </label>
          )}

          <input
            type='text'
            id='email'
            autoComplete='off'
            className='bg-inputBackground rounded-sm p-2 outline-none'
            value={inputs.email}
            onChange={handleInputs}
          />
        </div>
        <div className='flex flex-col'>
          {!isError && (
            <label
              htmlFor='password'
              className='text-normalGray mb-2 text-left text-xs font-bold uppercase'
            >
              Password <span className='text-red'>*</span>
            </label>
          )}

          {isError && (
            <label
              htmlFor='password'
              className='text-danger mb-2 text-left text-xs font-bold'
            >
              <span className='uppercase'>Password</span>
              <span className='font-normal italic'>
                {' '}
                - Login or password is invalid.
              </span>
            </label>
          )}

          <input
            type='password'
            id='password'
            className='bg-inputBackground rounded-sm p-2 outline-none'
            value={inputs.password}
            onChange={handleInputs}
          />
        </div>
      </div>

      <span
        className='text-textLink mb-5 mt-1 cursor-pointer self-start text-sm font-medium'
        onClick={handleForgotPassword}
      >
        Forgot your password?
      </span>

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
