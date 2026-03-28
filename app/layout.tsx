import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'AutoElite | Carros e Motos Premium',
  description: 'A melhor concessionária de carros e motos do Brasil. Encontre o veículo perfeito para você com financiamento facilitado e garantia estendida.',
  keywords: 'carros, motos, veículos, concessionária, financiamento, comprar carro, comprar moto',
  openGraph: {
    title: 'AutoElite | Carros e Motos Premium',
    description: 'A melhor concessionária de carros e motos do Brasil.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
