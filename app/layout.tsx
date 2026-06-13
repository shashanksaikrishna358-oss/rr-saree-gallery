import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'RR Saree Gallery - Luxury Sarees',
  description: 'Premium silk sarees crafted for timeless beauty. Explore our collection of Kanchipuram, Banarasi, Bridal, and Designer sarees.',
  keywords: ['sarees', 'silk sarees', 'luxury', 'Indian sarees', 'bridal sarees'],
  authors: [{ name: 'RR Saree Gallery' }],
  creator: 'RR Saree Gallery',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rrsareegallery.com',
    siteName: 'RR Saree Gallery',
    title: 'RR Saree Gallery - Luxury Sarees',
    description: 'Premium silk sarees crafted for timeless beauty',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-luxury-ivory text-luxury-charcoal`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
