'use client'
import Link from 'next/link'
import React from 'react'
import SiteNav from './SiteNav'
import { data } from '../../settings/website-data'
import { ModeToggle } from '../mode-toggle'

import { useAppContext } from '@/app/app-provider'
import ButtonLogout from '@/components/button-logout'

const Header = () => {
  const { user } = useAppContext()
  return (
    <header className="flex flex-col items-center justify-between space-y-2 border-b border-black/10 px-14 pb-9 lg:flex-row">
      <section className="text-center lg:text-left">
        <h1 className="text-4xl font-bold">Your daily store of phones</h1>

        <p className="text-xl opacity-90"> Store at {data.address} </p>

        <SiteNav />
      </section>

      <section className="accounts flex">
        <ul className="flex items-center gap-2">
          {user ? (
            <>
              <li>
                <Link href={'/me'}>
                  Xin chào <strong>{user.name}</strong>
                </Link>
              </li>
              <li>
                <ButtonLogout />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">LOGIN</Link>
              </li>
              <li>
                <Link href="/register">REGISTER</Link>
              </li>
            </>
          )}
        </ul>
        <ModeToggle />
      </section>
    </header>
  )
}

export default Header
