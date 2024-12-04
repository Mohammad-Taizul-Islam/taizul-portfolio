'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSection } from '@/lib/strore/navigationSlice'
import { RootState } from '@/lib/strore/store'
import { translations } from '@/lib/translations'
import { useState, useEffect } from 'react'

const nameText = "Taixul Islam"

const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    }
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const titles = ["Full Stack Developer", "Mobile App Developer"]

export function HomeSection() {
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const t = translations[currentLanguage]
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)

    return () => {
      clearInterval(titleInterval)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pr-20">
      <div className="text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {nameText.split('').map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={charVariants}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={titles[titleIndex]}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titles[titleIndex]}
          </motion.p>
        </AnimatePresence>
        <motion.div
          className="flex justify-between w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="group"
              onClick={() => window.open('/Taizul Islam-FullStack-Web-Developer.pdf', '_blank')}
            >
              {t.getResume}
              <motion.div
                className="ml-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Download className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
          <Button
            size="lg"
            className="group"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              dispatch(setCurrentSection('about'))
            }}
          >
            {t.aboutMe}
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}

