import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'
import { TitleBar } from '@/components/TitleBar'
import { Container } from '@/components/Container'

const font = Open_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Container variant='burple'>
          <TitleBar variant='burple' />
          <section>{children}</section>
        </Container>
      </body>
    </html>
  )
}
