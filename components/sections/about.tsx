'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { translations } from '@/lib/translations'



export function AboutSection({ t }: { t: typeof translations['en'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/taizul.jpg"
              alt="About me"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.aboutMe}
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t.aboutMeDescription}
            </motion.p>
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <h3 className="font-bold mb-2">{t.location}</h3>
                <p className="text-muted-foreground">New York, USA</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">{t.experience}</h3>
                <p className="text-muted-foreground">5+ Years</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

