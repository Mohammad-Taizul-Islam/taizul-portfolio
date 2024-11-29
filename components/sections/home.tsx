'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSection } from '../../lib/strore/navigationSlice'
import { RootState } from '../../lib/strore/store'
import { translations } from '../../lib/translations'
import { Link } from 'react-scroll';


export function HomeSection({ t }: { t: typeof translations['en'] }) {
  const dispatch = useDispatch()
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
   const t2 = translations[currentLanguage]

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Taizul Islam
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t2.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-64}
            duration={500}
            onClick={() => dispatch(setCurrentSection('about'))}
          >
            <Button size="lg" className="group">
              {t2.aboutMe}
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </Link>
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

