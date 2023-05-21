import './globals.css'
import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Roboto_Mono as Mono,
  Bai_Jamjuree as Bai,
} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})
const mono = Mono({
  subsets: ['latin'],
  variable: '--font-mono',
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
      <body
        className={`${roboto.variable} ${bai.variable} ${mono.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
