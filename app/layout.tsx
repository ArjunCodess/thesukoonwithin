import type { Metadata } from "next"
import { Geist_Mono, Inter, Lora } from "next/font/google"

import "./globals.css"
import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

const loraHeading = Lora({ subsets: ["latin"], variable: "--font-heading" })

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://thesukoonwithin.org"),
  title: {
    default: "The Sukoon Within",
    template: "%s | The Sukoon Within",
  },
  description:
    "A youth-led mental health movement building safe, non-judgemental education spaces for Gen Z.",
  openGraph: {
    title: "The Sukoon Within",
    description:
      "Youth-led mental health education, safe spaces, and community action for Gen Z.",
    url: "https://thesukoonwithin.org",
    siteName: "The Sukoon Within",
    images: [
      {
        url: "/logo.jpg",
        width: 1080,
        height: 1080,
        alt: "The Sukoon Within logo",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        loraHeading.variable
      )}
    >
      <body className="min-h-svh">
        <Header />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
