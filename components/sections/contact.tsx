'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
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

  async function handleSubmit(formData: FormData) {
    setIsPending(true)
    try {
      const result = await sendEmail(formData)
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error
        })
      } else {
        toast({
          title: "Success",
          description: "Your message has been sent!"
        })
        const form = document.getElementById('contact-form') as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again."
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
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.yourName}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
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
                    placeholder="your@email.com"
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
                    placeholder="Your message"
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


// 'use client'

// import { motion } from 'framer-motion'
// import { useInView } from 'framer-motion'
// import { useRef, useState } from 'react'
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
// import { Loader2 } from 'lucide-react'
// import { sendEmail } from '@/app/actions'
// import { useToast } from '../../hooks/use-toast'
// import { useSelector } from 'react-redux'
// import { RootState } from '@/lib/strore/store'
// import { translations } from '@/lib/translations'

// export function ContactSection() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })
//   const [isPending, setIsPending] = useState(false)
//   const { toast } = useToast()
//   const currentLanguage = useSelector((state: RootState) => state.language.currentLanguage)
//   const t = translations[currentLanguage]

//   async function handleSubmit(formData: FormData) {
//     setIsPending(true)
//     try {
//       const result = await sendEmail(formData)
//       if ('error' in result) {
//         toast({
//           variant: "destructive",
//           title: t.messageError,
//           description: result.error
//         })
//       } else {
//         toast({
//           title: t.messageSent,
//           description: t.messageSent
//         })
//         const form = document.getElementById('contact-form') as HTMLFormElement
//         form?.reset()
//       }
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: t.messageError,
//         description: t.messageError
//       })
//     } finally {
//       setIsPending(false)
//     }
//   }

//   return (
//     <section id="contact" className="min-h-screen py-20">
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
//             {t.contactMe}
//           </motion.h2>
//           <Card className="max-w-xl mx-auto">
//             <CardHeader>
//               <CardTitle>{t.contactMe}</CardTitle>
//               <CardDescription>
//                 {t.contactMe}
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form id="contact-form" action={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">
//                     {t.yourName}
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     required
//                     placeholder={t.yourName}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">
//                     {t.yourEmail}
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     placeholder={t.yourEmail}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-2">
//                     {t.yourMessage}
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     placeholder={t.yourMessage}
//                     rows={5}
//                   />
//                 </div>
//                 <Button type="submit" className="w-full" disabled={isPending}>
//                   {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
//                   {t.sendMessage}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }



