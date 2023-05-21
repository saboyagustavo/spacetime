import { User as UserIcon } from 'lucide-react'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-2">
      {/* left */}
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* sign-in */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
            <UserIcon className="h-5 w-5" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Sign in</span> and upload your memories
          </p>
        </a>

        {/* hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <h1 className="text-5xl font-bold leading-tight text-gray-50">
            Your own time capsule
          </h1>
          <p className="max-w-[328px] text-lg leading-relaxed">
            Collect defining moments from your journey and share them (if you
            feel like it) with the universe! 🚀
          </p>

          {/* upload button */}
          <a
            href=""
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
          >
            UPLOAD MEMORY
          </a>
        </div>

        {/* copyright */}
        <footer className="font-mono text-xs leading-relaxed text-gray-200">
          MADE WITH 💜 AT NLW SPACETIME FROM&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            className="underline transition-colors hover:text-gray-50"
            href="https://rocketseat.com.br"
          >
            Rocketseat
          </a>
        </footer>
      </section>

      {/* right */}
      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            You haven&apos;t registered any memories yet,
            <br />
            start{' '}
            <a
              href=""
              className="underline transition-colors hover:text-gray-50"
            >
              creating now
            </a>
            !
          </p>
        </div>
      </section>
    </main>
  )
}
