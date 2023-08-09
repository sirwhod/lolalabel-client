import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Anton, Oswald } from 'next/font/google'
import { ProductProvider } from '@/context/ProductContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
})
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Lola From Rio',
  description: 'Lola Label - Lola From Rio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body
        className={`${inter.variable} ${anton.variable} ${oswald.variable}`}
      >
        <div className="flex h-screen w-screen flex-col items-center overflow-x-hidden bg-lola-white-500">
          <ProductProvider>{children}</ProductProvider>
        </div>
      </body>
    </html>
  )
}
