import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://rajatkumarthakur.dev'),
  title: {
    default: "Rajat Kumar Thakur — Software Engineer & AI Enthusiast",
    template: "%s | Rajat Kumar Thakur",
  },
  description:
    "Software Engineer specializing in AI/ML, LLMs, and full-stack development. Building intelligent systems with RAG pipelines, agentic workflows, and modern web technologies.",
  keywords: ["Software Engineering", "AI", "Machine Learning", "LLM", "RAG", "Next.js", "React", "Python", "FastAPI", "Computer Vision", "Full Stack Developer"],
  authors: [{ name: "Rajat Kumar Thakur", url: "https://github.com/rajat-kumar-thakur" }],
  creator: "Rajat Kumar Thakur",
  publisher: "Rajat Kumar Thakur",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Rajat Kumar Thakur — Software Engineer & AI Enthusiast",
    description: "Software Engineer specializing in AI/ML, LLMs, and full-stack development. Building intelligent systems with RAG pipelines, agentic workflows, and modern web technologies.",
    siteName: "Rajat Kumar Thakur",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajat Kumar Thakur — Software Engineer & AI Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Kumar Thakur — Software Engineer & AI Enthusiast",
    description: "Software Engineer specializing in AI/ML, LLMs, and full-stack development.",
    creator: "@RajatKrThakur04",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
