'use client'

import { Provider } from 'react-redux'
import {RootState, store } from '../lib/strore/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', darkMode)
  }, [darkMode])

  return children
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
}

