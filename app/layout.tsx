import './globals.css'
import React from 'react'
import Link from 'next/link'

export const metadata = {
  title: 'Lovely — Find Love',
  description: 'A beautiful dating experience'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/"><h1 className="text-2xl font-extrabold text-primary">Lovely</h1></Link>
            <nav className="flex items-center space-x-4">
              <Link href="/pricing" className="px-3 py-2 rounded-md hover:bg-gray-100">Pricing</Link>
              <Link href="/matches" className="px-3 py-2 rounded-md hover:bg-gray-100">Matches</Link>
              <Link href="/admin" className="px-3 py-2 rounded-md bg-primary text-white rounded-lg">Admin</Link>
            </nav>
          </div>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t mt-10 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600">
            © {new Date().getFullYear()} Lovely — built with ❤️
          </div>
        </footer>
      </body>
    </html>
  )
}
