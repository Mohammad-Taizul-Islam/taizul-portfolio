'use client'

import { Moon, Sun } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'
import { RootState } from '@/lib/strore/store'
import { toggleTheme } from '@/lib/strore/themeSlice'

export function ThemeSwitcher() {
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

