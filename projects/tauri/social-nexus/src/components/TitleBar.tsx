'use client'
import { Minus, Square, X } from 'lucide-react'

interface TitleBarProps {
  variant?: 'burple' | 'default'
}

export const TitleBar: React.FC<TitleBarProps> = ({ variant = 'default' }) => {
  return (
    <div
      data-tauri-drag-region
      className={`flex h-5 items-center justify-between ${colors[variant]}`}
      onDrag={windowActions.startDrag}
    >
      <div
        className='pl-2 text-xs font-extrabold text-gray-400'
        data-tauri-drag-region
      >
        SocialNexus
      </div>
      <div className='flex h-full items-center justify-center text-gray-400'>
        <button
          className='h-full px-1.5 duration-300 hover:bg-black hover:bg-opacity-10 hover:text-white'
          onClick={windowActions.minimize}
        >
          <Minus size={18} strokeWidth={1.4} />
        </button>
        <button
          className='h-full px-2 duration-300 hover:bg-black hover:bg-opacity-10 hover:text-white'
          onClick={windowActions.maximize}
        >
          <Square size={14} strokeWidth={1.4} />
        </button>

        <button
          className='hover:bg-red h-full px-1.5 duration-300 hover:text-white'
          onClick={windowActions.close}
        >
          <X size={18} strokeWidth={1.4} />
        </button>
      </div>
    </div>
  )
}

const colors = {
  burple: 'bg-burple',
  default: '',
}

const windowActions = {
  minimize: async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    void appWindow.minimize()
  },
  maximize: async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    void appWindow.toggleMaximize()
  },
  close: async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    void appWindow.close()
  },
  startDrag: async () => {
    const { appWindow } = await import('@tauri-apps/api/window')
    void appWindow.startDragging()
  },
}
