import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './_navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dikarolo tsa puo',
  description: 'Dikarolo tsa puo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*<div className="flex h-screen">
          {/*<aside className="w-1/6 bg-gray-200 dark:bg-gray-800 sticky top-0">
            {/* Your sidebar content*/}
          {/*</aside>*/}
          <NavBar/>
            {children}
        {/*</div>*/}
        </body>
    </html>
  )
}
