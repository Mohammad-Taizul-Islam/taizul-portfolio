


'use client'

import { motion, useInView } from 'framer-motion'
import { useState, FormEvent, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2, Mail, CheckCircle } from 'lucide-react'
import { submitContactForm } from '@/app/actions'
import { useToast } from '../../hooks/use-toast'
import { translations } from '@/lib/translations'

export function ContactSection({ t }: { t: typeof translations['en'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsPending(true)
    setIsSuccess(false)
    
    const formData = new FormData(event.currentTarget)
    
    try {
      const result = await submitContactForm(formData)
      if (result.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: result.error
        })
      } else {
        setIsSuccess(true)
        toast({
          title: "Success",
          description: result.message || t.messageSent
        })
        event.currentTarget.reset()

        setTimeout(() => setIsSuccess(false), 5000)
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
    <section id="contact" className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center">
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
            {t.contact}
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6 text-primary" />
              <CardTitle>{t.contactMe}</CardTitle>
              </div>
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
                    disabled={isPending}
                    placeholder={t.yourName}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
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
                    disabled={isPending}
                    placeholder={t.yourEmail}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
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
                    disabled={isPending}
                    placeholder={t.yourMessage}
                    rows={5}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full transition-all duration-200" 
                  disabled={isPending}
                  variant={isSuccess ? "default" : "default"}
                >
                  {isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  {isSuccess && <CheckCircle className="w-4 h-4 mr-2" />}
                  {isPending ? 'Sending...' : isSuccess ? 'Message Sent!' : t.sendMessage}
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

