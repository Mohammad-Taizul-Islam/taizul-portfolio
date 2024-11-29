'use client'

import { useSelector } from 'react-redux'
import { Element } from 'react-scroll'
import { Navbar } from '@/components/navbar'
import { HomeSection } from '@/components/sections/home'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { ProjectsSection } from '@/components/sections/projects'
import { ServicesSection } from '@/components/sections/services'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ContactSection } from '@/components/sections/contact'
import { Toaster } from '@/components/ui/toaster'
import { RootState } from '../lib/strore/store'
import { translations } from '@/lib/translations'

export default function Home() {
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const t = translations[currentLanguage]

  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <Element name="home" className="snap-start h-screen">
          <HomeSection t={t} />
        </Element>
        <Element name="about" className="snap-start h-screen">
          <AboutSection t={t} />
        </Element>
        <Element name="skills" className="snap-start h-screen">
          <SkillsSection t={t} />
        </Element>
        <Element name="projects" className="snap-start h-screen">
          <ProjectsSection t={t} />
        </Element>
        <Element name="services" className="snap-start h-screen">
          <ServicesSection t={t} />
        </Element>
        <Element name="testimonials" className="snap-start h-screen">
          <TestimonialsSection t={t} />
        </Element>
        <Element name="contact" className="snap-start h-screen">
          <ContactSection t={t} />
        </Element>
      </main>
      <Toaster />
    </>
  )
}

