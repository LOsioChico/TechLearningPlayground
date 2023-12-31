'use client'
import { useEffect } from 'react'
import Vara from 'vara'

interface VaraTextProps {
  text: string
}

export const VaraText: React.FC<VaraTextProps> = ({ text }) => {
  useEffect(() => {
    new Vara(
      '#vara-container',
      'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
      [
        {
          text,
          fontSize: 30,
          strokeWidth: 2,
          color: '#CB6CE6',
          textAlign: 'center',
          y: 5,
        },
      ],
    )
  }, [text])

  return <div id='vara-container' className='z-[20]' />
}
