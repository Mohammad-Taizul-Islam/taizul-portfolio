'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'


export function SocialLinks() {



const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' }
]
  return (
    <motion.div 
      className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {socialLinks.map((link, index) => {
        console.log(`Rendering social link: ${link.label}`); // Add logging
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 * index }}
            onClick={() => console.log(`Clicked on: ${link.label}`)} // Add click logging
          >
            <link.icon className="w-6 h-6" />
            <span className="sr-only">{link.label}</span>
          </motion.a>
        );
      })}
    </motion.div>
  )
}

