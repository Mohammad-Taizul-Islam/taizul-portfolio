// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useState, FormEvent, useRef } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
// import { Loader2 } from 'lucide-react'
// import { sendEmail } from '@/app/actions'
// import { useToast } from '../../hooks/use-toast'
// import { translations } from '@/lib/translations'

// type TranslationType = typeof translations['en']

// const defaultTranslations: TranslationType = {
//   contact: 'Contact',
//   contactMe: 'Contact Me',
//   yourName: 'Your Name',
//   yourEmail: 'Your Email',
//   yourMessage: 'Your Message',
//   sendMessage: 'Send Message',
//   home: 'Home',
//   about: 'About Me',
//   getResume: 'Get Resume',
//   skills: 'Skills & Technologies',
//   projects: 'Projects',
//   services: 'Services',
//   service1Title: 'Web Development',
//   service1Description: 'Building responsive and performant web applications',
//   service2Title: 'UI/UX Design',
//   service2Description: 'Creating beautiful and intuitive user interfaces',
//   service3Title: 'Backend Development',
//   service3Description: 'Developing robust server-side applications',
//   service4Title: 'Mobile Development',
//   service4Description: 'Building cross-platform mobile applications',
//   testimonials: 'Testimonials',
//   title: 'Full Stack Developer',
//   aboutMe: 'About Me',
//   latestWorks: 'Latest Works',
//   theme: 'Theme',
//   language: 'Language',
//   messageSent: 'Your message has been sent!',
//   messageError: 'Something went wrong. Please try again.',
//   aboutMeDescription: 'I am a passionate developer with experience in building modern web applications. My journey in web development started several years ago, and I\'ve been in love with creating beautiful and functional websites ever since.',
//   location: 'Location',
//   experience: 'Experience',
//   viewCode: 'View Code',
//   viewDemo: 'View Demo',
//   contactDescription: 'Fill out the form below and I\'ll get back to you as soon as possible.'
// }

// export function ContactSection({ t = {} as Partial<TranslationType> }) {
//   const translations = { ...defaultTranslations, ...t }
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const [isPending, setIsPending] = useState(false)
//   const { toast } = useToast()

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     setIsPending(true)
    
//     const formData = new FormData(event.currentTarget)
    
//     try {
//       const result = await sendEmail(formData)
//       if ('error' in result) {
//         toast({
//           variant: "destructive",
//           title: "Error",
//           description: result.error
//         })
//       } else {
//         toast({
//           title: "Success",
//           description: "Your message has been sent!"
//         })
//         event.currentTarget.reset()
//       }
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Something went wrong. Please try again."
//       })
//     } finally {
//       setIsPending(false)
//     }
//   }

//   return (
//     <section id="contact" className="h-screen py-20 flex items-center">
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
//             {translations.contact}
//           </motion.h2>
//           <Card className="max-w-xl mx-auto">
//             <CardHeader>
//               <CardTitle>{translations.contactMe}</CardTitle>
//               <CardDescription>
//                 {translations.contactDescription}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     {translations.yourName}
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     required
//                     placeholder={translations.yourName}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     {translations.yourEmail}
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     placeholder={translations.yourEmail}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     {translations.yourMessage}
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     placeholder={translations.yourMessage}
//                     rows={5}
//                   />
//                 </div>
//                 <Button type="submit" className="w-full" disabled={isPending}>
//                   {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
//                   {translations.sendMessage}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




'use client'

import { motion, useInView } from 'framer-motion'
import { useState, FormEvent, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { sendEmail } from '@/app/actions'
import { useToast } from '../../hooks/use-toast'
import { translations } from '@/lib/translations'

export function ContactSection({ t }: { t: typeof translations['en'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    
    const formData = new FormData(event.currentTarget)
    
    try {
      const result = await sendEmail(formData)
      if ('error' in result) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error
        })
      } else {
        toast({
          title: "Success",
          description: t.messageSent
        })
        event.currentTarget.reset()
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: t.messageError
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section id="contact" className="h-screen py-20 flex items-center">
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
            {t.contact}
          </motion.h2>
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>{t.contactMe}</CardTitle>
              <CardDescription>
                {t.contactDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.yourName}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder={t.yourName}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.yourEmail}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.yourEmail}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.yourMessage}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder={t.yourMessage}
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  {t.sendMessage}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

