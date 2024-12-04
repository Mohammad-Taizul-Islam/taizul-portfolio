'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Layout, Server, Smartphone } from 'lucide-react'


// export function ServicesSection({ t }: { t: typeof translations['en'] }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   return (
//     <section id="services" className="h-screen py-20 flex items-center">
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
//             {t.services}
//           </motion.h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//                 transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
//               >
//                 <Card className="text-center">
//                   <CardHeader>
//                     <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
//                       <service.icon className="w-6 h-6 text-primary" />
//                     </div>
//                     <CardTitle>{t[`service${index + 1}Title`]}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground">{t[`service${index + 1}Description`]}</p>
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



export function ServicesSection({ t }: { t: Record<string, string> }) {


const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and performant web applications',
    icon: Code
  },
  {
    title: 'Frontend Developmemt',
    description: 'Creating beautiful and intuitive user interfaces',
    icon: Layout
  },
  {
    title: 'Backend Development',
    description: 'Developing robust server-side applications',
    icon: Server
  },
  {
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications',
    icon: Smartphone
  }
]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="services" className="h-screen py-20 flex items-center">
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
            {t.services}
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{t[`service${index + 1}Title`]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t[`service${index + 1}Description`]}</p>
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
