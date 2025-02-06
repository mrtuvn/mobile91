import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <main className="mx-auto min-h-screen max-w-[1200px] space-y-10 bg-zinc-200 py-10 pb-24 text-black">
        <header className="flex flex-col items-center justify-between space-y-2 border-b border-black/10 px-14 pb-9 lg:flex-row">
          <section className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Your daily store of phones</h1>

            <p className="text-xl opacity-90"> Store at xxx@xxx </p>
          </section>

          <section>LOGIN/REGISTER</section>
        </header>

        <div className="content px-14 py-10">
          <Link href="/create-post">Go Upload Page</Link>
        </div>
      </main>
      <footer>
        <p className="px-14 text-center">FOOTER CONTENT</p>
      </footer>
    </>
  )
}
