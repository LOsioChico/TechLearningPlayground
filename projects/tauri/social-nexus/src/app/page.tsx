import { AuthBackground } from '@/assets/AuthBackground'
import { Container } from '@/components/Container'
import { LoginModal } from '@/components/modals/LoginModal'
import { TitleBar } from '@/components/TitleBar'

const LoginPage = () => {
  return (
    <Container variant='burple'>
      <TitleBar />
      <main className='relative h-full w-full'>
        <AuthBackground className='absolute h-screen w-screen' />
        <section className='absolute flex h-screen w-screen items-center justify-center'>
          <LoginModal />
        </section>
      </main>
    </Container>
  )
}

export default LoginPage

// const HomePage = () => {
//   return <div></div>
// }

// export default HomePage
