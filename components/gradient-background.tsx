'use client'

import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { RootState } from '@/lib/strore/store'
export function GradientBackground() {
  const { darkMode, gradient } = useSelector((state: RootState) => state.theme)

  const gradients = {
    purple: {
      light: 'from-purple-300 via-pink-200 to-indigo-300',
      dark: 'from-purple-900 via-pink-900 to-indigo-900'
    },
    blue: {
      light: 'from-blue-300 via-cyan-200 to-teal-300',
      dark: 'from-blue-900 via-cyan-900 to-teal-900'
    },
    green: {
      light: 'from-green-300 via-emerald-200 to-teal-300',
      dark: 'from-green-900 via-emerald-900 to-teal-900'
    }
  }

  const currentGradient = darkMode ? gradients[gradient].dark : gradients[gradient].light

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${currentGradient} opacity-20`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 backdrop-blur-3xl" />
    </div>
  )
}

