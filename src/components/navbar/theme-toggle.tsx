'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
    className='h-[30px] w-[30px] p-[2px] md:h-10 md:w-10 md:p-0'
      variant='ghost'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className='h-[28px] w-[28px] stroke-[2.2px] dark:hidden md:stroke-[2.7px]' />
      <Moon className='hidden h-[28px] w-[28px] stroke-2 dark:flex md:stroke-[2.4px]' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
