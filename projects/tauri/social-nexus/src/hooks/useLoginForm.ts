import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type LoginFormInputs = {
  email: string
  password: string
}

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  })

  const isError = Object.keys(errors).length > 0

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return { register, onSubmit, isError, isSubmitting }
}

// schema.ts
import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginSchema = z.infer<typeof loginSchema>
