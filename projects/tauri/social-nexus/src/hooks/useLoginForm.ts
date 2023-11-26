import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/schemas/loginSchema'
import { supabase } from '@/lib/supabase'

type LoginFormInputs = {
  email: string
  password: string
}

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  })

  const isError = Object.keys(errors).length > 0

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError('email', {
        type: 'manual',
        message: error.message,
      })
      return
    }

    console.log({ data })
  })

  return { register, onSubmit, isError, isSubmitting }
}
