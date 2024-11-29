'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at TechCorp',
    content: 'Amazing work! The attention to detail and quality of delivery exceeded our expectations.',
    image: '/placeholder.svg'
  },
  {
    name: 'Jane Smith',
    role: 'CTO at StartupX',
    content: 'Excellent communication and project management. Would definitely work together again.',
    image: '/placeholder.svg'
  },
  {
    name: 'Mike Johnson',
    role: 'Product Manager',
    content: 'The final product was exactly what we needed. Great understanding of our requirements.',
    image: '/placeholder.svg'
  },
  {
    name: 'Sarah Williams',
    role: 'Design Lead',
    content: 'Incredible attention to design details and user experience. A pleasure to work with.',
    image: '/placeholder.svg'
  }
]

export function TestimonialsSection({ t }: { t: typeof translations['en'] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const x = useTransform(scrollXProgress, [0, 1], ["0%", "-75%"])

  return (
    <section id="testimonials" className="h-screen py-20 flex items-center">
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
            {t.testimonials}
          </motion.h2>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 py-4"
              style={{ x }}
              animate={{
                x: [0, "-75%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 20,
                    ease: "linear",
                  },
                },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="w-[400px] shrink-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <Quote className="absolute top-0 left-0 w-8 h-8 text-primary/20" />
                      <p className="pl-10 text-muted-foreground">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

