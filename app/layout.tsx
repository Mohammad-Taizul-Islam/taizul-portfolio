import { GeometricBackground } from "@/components/geometric-background";
import { GradientBackground } from "@/components/gradient-background";
import { SocialLinks } from "@/components/social-links";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://techpholio.io"),
  title: {
    default:
      "Taixul Islam | JavaScript Full Stack Developer  | Mobile App Developer | MERN Stack Developer",
    template: "%s | Taixul Islam",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js. MERN stack and java and python. Mobile App Developer. Building modern web applications with clean code.",
  keywords: [
    "Full Stack Developer portfolio",
    "React Developer portfolio",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer portfolio",
    "Frontend Developer",
    "UI Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Freelance Web Developer",
    "Web Developer in [Dhaka]",
    "React Developer [Dhaka]",
    "Hire Web Developer [Dhaka]",
  ],
  authors: [{ name: "Taixul Islam", url: "https://techpholio.io" }],
  creator: "Taixul Islam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techpholio.io",
    title: "Taixul Islam | Full Stack Developer",
    description:
      "Full Stack Developer portfolio showcasing React, Next.js projects",
    siteName: "Taixul Islam Portfolio",
    images: [
      {
        url: "https://techpholio.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taixul Islam Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taixul Islam | Full Stack Developer",
    description:
      "Explore the portfolio of Taixul Islam, a Full Stack Developer specialized in building high-performance web and mobile applications.",
    images: ["/modern-portfolio.png"],
    creator: "@taixul_islam",
    site: "https://portpholio.io",
  },
  verification: {
    google: "your-google-verification-code", // Get from Google Search Console
  },
  alternates: {
    canonical: "https://techpholio.io",
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
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
