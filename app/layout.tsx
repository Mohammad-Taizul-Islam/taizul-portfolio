import { GeometricBackground } from "@/components/geometric-background";
import { GradientBackground } from "@/components/gradient-background";
import { SocialLinks } from "@/components/social-links";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Taizul Islam | Full Stack Developer",
    template: "%s | Taizul Islam",
  },
  description:
    "Taizul Islam is a passionate Full Stack Developer and Mobile App Developer with 2+ years of experience in building modern web and mobile applications using React, Next.js, and Node.js.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "Mobile App Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Taizul Islam",
    "Software Engineer",
  ],
  authors: [
    { name: "Taizul Islam", url: "https://taizul-portfolio.vercel.app" },
  ],
  creator: "Taizul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taizul-portfolio.vercel.app",
    title: "Taizul Islam | Full Stack Developer",
    description:
      "Explore the portfolio of Taizul Islam, a Full Stack Developer specialized in building high-performance web and mobile applications.",
    siteName: "Taizul Islam Portfolio",
    images: [
      {
        url: "/modern-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Taizul Islam Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taizul Islam | Full Stack Developer",
    description:
      "Explore the portfolio of Taizul Islam, a Full Stack Developer specialized in building high-performance web and mobile applications.",
    images: ["/modern-portfolio.png"],
    creator: "@taizul_islam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/icon.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Toaster />
          <GradientBackground />
          <GeometricBackground />
          <SocialLinks />
          {children}
        </Providers>
      </body>
    </html>
  );
}
