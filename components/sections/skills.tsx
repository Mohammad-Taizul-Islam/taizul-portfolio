'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaMobile } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiRedux } from 'react-icons/si'

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Database', icon: FaDatabase, color: '#336791' },
  { name: 'Mobile Dev', icon: FaMobile, color: '#A4C639' },
]

export function SkillsSection({ t }: { t: typeof translations['en'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="skills" className="h-screen py-20 flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.skills}
          </motion.h2>

          <div className="relative overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex gap-6 py-4"
              style={{ x }}
              animate={{
                x: [0, "-50%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center w-40 h-40">
                    <skill.icon size={60} color={skill.color} />
                    <span className="mt-4 text-sm font-medium text-center">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

