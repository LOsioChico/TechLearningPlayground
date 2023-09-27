import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const font = Open_Sans({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          storageKey='discord-theme'
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
