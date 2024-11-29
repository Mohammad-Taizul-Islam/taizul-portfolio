import { GeometricBackground } from '@/components/geometric-background'
import { GradientBackground } from '@/components/gradient-background'
import { SocialLinks } from '@/components/social-links'
import { Providers } from './providers'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <GradientBackground />
          <GeometricBackground />
          <SocialLinks />
          {children}
        </Providers>
      </body>
    </html>
  )
}

