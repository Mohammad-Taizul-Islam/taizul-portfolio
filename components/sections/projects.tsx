// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef } from 'react'
// import Image from 'next/image'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Github, ExternalLink } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/lib/strore/store'
// import { translations } from '@/lib/translations'



// export function ProjectsSection() {

//   const projects = [
//     {
//       title: 'Techfolio',
//       description: 'portfolioDescription',
//       image: '/modern-portfolio.png',
//       github: 'https://github.com/Mohammad-Taizul-Islam/taizul-portfolio',
//       demo: 'https://taizul-portfolio.vercel.app/',
//       tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Prisma', 'Vercel']
//     },
//     {
//       title: 'Club App',
//       description: 'clubAppDescription',
//       image: '/club-app.webp',
//       github: 'https://github.com/yourusername/club-app',
//       demo: 'https://club-app-demo.vercel.app',
//       tags: ['React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Vercel']
//     },
//     {
//       title: 'Educational Website',
//       description: 'educationalWebsiteDescription',
//       image: '/educational-website.webp',
//       github: 'https://github.com/yourusername/educational-website',
//       demo: 'https://educational-website-demo.vercel.app',
//       tags: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Strapi CMS', 'Vercel']
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'portfolioDescription',
//       image: '/portfolio-website.webp',
//       github: 'https://github.com/yourusername/portfolio-website',
//       demo: 'https://portfolio-website-demo.vercel.app',
//       tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit', 'Vercel']
//     }
//   ]
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
//   const t = translations[currentLanguage]

//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center py-20 snap-start">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 100 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.h2
//             className="text-3xl font-bold text-center mb-12"
//             initial={{ opacity: 0, y: -50 }}
//             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             {t.projects}
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
//             {projects.map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//               >
//                 <Card className="overflow-hidden group">
//                   <div className="relative h-32">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover transition-transform group-hover:scale-105"
//                     />
//                   </div>
//                   <CardHeader>
//                     <CardTitle>{project.title}</CardTitle>
//                     <CardDescription>{[project.description]}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="px-2 py-1 bg-primary/10 rounded-full text-sm"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex gap-4">
//                       <Button variant="outline" size="sm" asChild>
//                         <a href={project.github} target="_blank" rel="noopener noreferrer">
//                           <Github className="w-4 h-4 mr-2" />
//                           {t.viewCode}
//                         </a>
//                       </Button>
//                       <Button variant="outline" size="sm" asChild>
//                         <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           {t.viewDemo}
//                         </a>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/strore/store'
import { translations } from '@/lib/translations'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Techfolio',
      description: 'portfolioDescription',
      image: '/modern-portfolio.png',
      github: 'https://github.com/Mohammad-Taizul-Islam/taizul-portfolio',
      demo: 'https://taizul-portfolio.vercel.app/',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'MongoDB', 'Prisma', 'Vercel']
    },
    {
      title: 'Club App',
      description: 'clubAppDescription',
      image: '/club-app.webp',
      github: 'https://github.com/yourusername/club-app',
      demo: 'https://club-app-demo.vercel.app',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Firebase', 'Vercel']
    },
    {
      title: 'Educational Website',
      description: 'educationalWebsiteDescription',
      image: '/educational-website.webp',
      github: 'https://github.com/yourusername/educational-website',
      demo: 'https://educational-website-demo.vercel.app',
      tags: ['Next.js', 'Tailwind CSS', 'GraphQL', 'Strapi CMS', 'Vercel']
    },
    {
      title: 'Portfolio Website',
      description: 'portfolioDescription',
      image: '/portfolio-website.webp',
      github: 'https://github.com/yourusername/portfolio-website',
      demo: 'https://portfolio-website-demo.vercel.app',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit', 'Vercel']
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
  const t = translations[currentLanguage]

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 snap-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 sm:space-y-12"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.projects}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm sm:text-base">{[project.description]}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 rounded-full text-xs sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto">
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {t.viewCode}
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.viewDemo}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
