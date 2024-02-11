'use client'

import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/client/header'
import Footer from '@/components/client/footer'
import { DataProvider } from '@/components/client/dataContext'

import { useState } from 'react'

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
      <body className={`w-full ${active ? 'fixed' : ''} ${inter.className}`}>
        <Header isActive={active} onClick={handleClick} />
        <DataProvider>{children}</DataProvider>
        <Footer />
      </body>
    </html>
  )
}
