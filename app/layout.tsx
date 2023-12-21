import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';

const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waitlist',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={oswald.className}>
          <div className="flex flex-col h-screen">
          <header className='w-screen px-16 py-8 text-4xl'>Wait-list</header>
          {children}
          </div>
          </body>
      </UserProvider>
    </html>
  )
}
