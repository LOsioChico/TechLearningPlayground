import '@/styles/globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
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
