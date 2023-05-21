import { ReactNode } from 'react'

import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Bai } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})
const bai = Bai({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'A custom time capsule built with Next.js, TailwindCSS and Typescript',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${bai.variable}`}>{children}</body>
    </html>
  )
}
