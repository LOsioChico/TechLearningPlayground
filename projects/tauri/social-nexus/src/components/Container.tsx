'use client'
import { useState, useEffect } from 'react'

interface ContainerProps {
  children: React.ReactNode
  variant?: 'burple' | 'dark'
}

export const Container: React.FC<ContainerProps> = ({
  children,
  variant = 'dark',
}) => {
  const [isMaximized, setIsMaximized] = useState(false)

  useEffect(() => {
    let unListen: () => void

    void import('@tauri-apps/api/window').then(async ({ appWindow }) => {
      unListen = await appWindow.listen('tauri://resize', async () => {
        const currentStatus = await appWindow.isMaximized()

        if (currentStatus !== isMaximized) {
          setIsMaximized(currentStatus)
        }
      })
    })

    return () => unListen && unListen()
  }, [isMaximized])

  return (
    <main
      className={`h-full overflow-hidden transition-all ${colors[variant]}
      ${
        isMaximized ? '' : 'rounded-lg border border-gray-500 border-opacity-50'
      }
      `}
    >
      {children}
    </main>
  )
}

const colors = {
  burple: 'bg-burple',
  dark: 'bg-dark',
}
