import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Health Assessment Form',
  description: 'Generated form preview',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
