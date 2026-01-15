// 'use client'

// import { useSelector } from 'react-redux'
// import { Element } from 'react-scroll'
// import { Navbar } from '@/components/navbar'
// import { HomeSection } from '@/components/sections/home'
// import { AboutSection } from '@/components/sections/about'
// import { SkillsSection } from '@/components/sections/skills'
// import { ProjectsSection } from '@/components/sections/projects'
// import { ServicesSection } from '@/components/sections/services'
// import { TestimonialsSection } from '@/components/sections/testimonials'
// import { ContactSection } from '@/components/sections/contact'
// import { Toaster } from '@/components/ui/toaster'
// import { RootState } from '../lib/strore/store'
// import { translations, TranslationTypes } from '@/lib/translations';

// export default function Home() {
//   const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
//   const t = translations[currentLanguage]

//   return (
//     <>
//       <Navbar />
//       <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
//         <Element name="home" className="snap-start h-screen">
//           <HomeSection t={t} />
//         </Element>
//         <Element name="about" className="snap-start h-screen">
//           <AboutSection t={t} />
//         </Element>
//         <Element name="skills" className="snap-start h-screen">
//           <SkillsSection t={t} />
//         </Element>
//         <Element name="projects" className="snap-start h-screen">
//           <ProjectsSection t={t} />
//         </Element>
//         <Element name="services" className="snap-start h-screen">
//           <ServicesSection t={t} />
//         </Element>
//         <Element name="testimonials" className="snap-start h-screen">
//           <TestimonialsSection t={t} />
//         </Element>
//         <Element name="contact" className="snap-start h-screen">
//           <ContactSection t={t} />
//         </Element>
//       </main>
//       <Toaster />
//     </>
//   )
// }

// 'use client'

// import { useSelector } from 'react-redux'
// import { Element } from 'react-scroll'
// import { Navbar } from '@/components/navbar'
// import { HomeSection } from '@/components/sections/home'
// import { AboutSection } from '@/components/sections/about'
// import { SkillsSection } from '@/components/sections/skills'
// import { ProjectsSection } from '@/components/sections/projects'
// import { ServicesSection } from '@/components/sections/services'
// import { TestimonialsSection } from '@/components/sections/testimonials'
// import { ContactSection } from '@/components/sections/contact'
// import { Toaster } from '@/components/ui/toaster'
// import { RootState } from '@/lib/strore/store'
// import {translations, TranslationType } from '../lib/translations';

// export default function Home() {
//   const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
//   const t: TranslationType = translations[currentLanguage]

//   return (
//     <>
//       <Navbar />
//       <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
//         <Element name="home" className="snap-start h-screen">
//           <HomeSection t={t}/>
//         </Element>
//         <Element name="about" className="snap-start h-screen">
//           <AboutSection t={t} />
//         </Element>
//         <Element name="skills" className="snap-start h-screen">
//           <SkillsSection t={t} />
//         </Element>
//         <Element name="projects" className="snap-start h-screen">
//           <ProjectsSection t={t} />
//         </Element>
//         <Element name="services" className="snap-start h-screen">
//           <ServicesSection t={t} />
//         </Element>
//         <Element name="testimonials" className="snap-start h-screen">
//           <TestimonialsSection t={t} />
//         </Element>
//         <Element name="contact" className="snap-start h-screen">
//           <ContactSection t={t} />
//         </Element>
//       </main>
//       <Toaster />
//     </>
//   )
// }

// 'use client'

// import { useSelector } from 'react-redux'
// import { Element } from 'react-scroll'
// import { Navbar } from '@/components/navbar'
// import { HomeSection } from '@/components/sections/home'
// import { AboutSection } from '@/components/sections/about'
// import { SkillsSection } from '@/components/sections/skills'
// import { ProjectsSection } from '@/components/sections/projects'
// import { ServicesSection } from '@/components/sections/services'
// import { TestimonialsSection } from '@/components/sections/testimonials'
// import { ContactSection } from '@/components/sections/contact'
// import { Toaster } from '@/components/ui/toaster'
// import { RootState } from '@/lib/strore/store'
// import { translations, TranslationType } from '../lib/translations'

// // Define a common props interface for all sections
// interface SectionProps {
//   t: TranslationType;
// }

// // Update component types
// const TypedHomeSection = HomeSection as React.ComponentType<SectionProps>
// const TypedAboutSection = AboutSection as React.ComponentType<SectionProps>
// const TypedSkillsSection = SkillsSection as React.ComponentType<SectionProps>
// const TypedProjectsSection = ProjectsSection as React.ComponentType<SectionProps>
// const TypedServicesSection = ServicesSection as React.ComponentType<SectionProps>
// const TypedTestimonialsSection = TestimonialsSection as React.ComponentType<SectionProps>
// const TypedContactSection = ContactSection as React.ComponentType<SectionProps>

// export default function Home() {
//   const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
//   const t: TranslationType = translations[currentLanguage]

//   return (
//     <>
//       <Navbar />
//       <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
//         <Element name="home" className="snap-start h-screen">
//           <TypedHomeSection t={t} />
//         </Element>
//         <Element name="about" className="snap-start h-screen">
//           <TypedAboutSection t={t} />
//         </Element>
//         <Element name="skills" className="snap-start h-screen">
//           <TypedSkillsSection t={t} />
//         </Element>
//         <Element name="projects" className="snap-start h-screen">
//           <TypedProjectsSection t={t} />
//         </Element>
//         <Element name="services" className="snap-start h-screen">
//           <TypedServicesSection t={t} />
//         </Element>
//         <Element name="testimonials" className="snap-start h-screen">
//           <TypedTestimonialsSection t={t} />
//         </Element>
//         <Element name="contact" className="snap-start h-screen">
//           <TypedContactSection t={t} />
//         </Element>
//       </main>
//       <Toaster />
//     </>
//   )
// }

"use client";

import { useSelector } from "react-redux";
import { Element } from "react-scroll";
import { Navbar } from "@/components/navbar";
import { HomeSection } from "@/components/sections/home";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Toaster } from "@/components/ui/toaster";
import { RootState } from "@/lib/strore/store";
import { translations, TranslationType } from "../lib/translations";

// Define a common props interface for all sections
interface SectionProps {
  t: TranslationType;
}

// Update component types
const TypedHomeSection = HomeSection as React.ComponentType<SectionProps>;
const TypedAboutSection = AboutSection as React.ComponentType<SectionProps>;
const TypedSkillsSection = SkillsSection as React.ComponentType<SectionProps>;
const TypedProjectsSection =
  ProjectsSection as React.ComponentType<SectionProps>;
const TypedServicesSection =
  ServicesSection as React.ComponentType<SectionProps>;
const TypedTestimonialsSection =
  TestimonialsSection as React.ComponentType<SectionProps>;
const TypedContactSection = ContactSection as React.ComponentType<SectionProps>;

export default function Home() {
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );
  const t: TranslationType = translations[currentLanguage];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Taizul Islam",
    jobTitle: "Full Stack Developer",
    url: "https://taizul-portfolio.vercel.app",
    sameAs: [
      "https://github.com/Mohammad-Taizul-Islam",
      "https://linkedin.com/in/taizul-islam",
    ],
    description:
      "Full Stack Developer and Mobile App Developer with 2+ years of experience.",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow overflow-x-hidden">
        <div className="md:snap-y md:snap-mandatory md:h-screen md:overflow-y-scroll">
          <Element
            name="home"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedHomeSection t={t} />
          </Element>
          <Element
            name="about"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedAboutSection t={t} />
          </Element>
          <Element
            name="skills"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedSkillsSection t={t} />
          </Element>
          <Element
            name="projects"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedProjectsSection t={t} />
          </Element>
          <Element
            name="services"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedServicesSection t={t} />
          </Element>
          <Element
            name="testimonials"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedTestimonialsSection t={t} />
          </Element>
          <Element
            name="contact"
            className="min-h-screen md:snap-start flex items-center justify-center py-16 md:py-0"
          >
            <TypedContactSection t={t} />
          </Element>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
