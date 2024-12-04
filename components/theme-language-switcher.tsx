'use client'

import { Moon, Sun, Globe } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { RootState } from '@/lib/strore/store'
import { toggleTheme } from '@/lib/strore/themeSlice'
import { setLanguage } from '@/lib/strore/languageSlice'
import { motion } from 'framer-motion'
import { translations } from '@/lib/translations'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
] as const

export function ThemeLanguageSwitcher() {
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const t = translations[currentLanguage]

  return (
    <motion.div 
      className="fixed top-4 right-4 flex items-center gap-2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => dispatch(toggleTheme())}
        className="relative"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">{t.theme}</span>
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
            <span className="sr-only">{t.language}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => dispatch(setLanguage(lang.code))}
              className={currentLanguage === lang.code ? 'bg-accent' : ''}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  )
}

