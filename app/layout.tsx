'use client'

import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { DataProvider } from '@/components/context'
import { useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    if (active) setActive(false)
    else setActive(true)
  }

  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col ${active ? 'h-full overflow-hidden' : ''} ${inter.className}`}>
        <Header isActive={active} onClick={handleClick} />
        <DataProvider>{children}</DataProvider>
        <Footer />
      </body>
    </html>
  )
}
