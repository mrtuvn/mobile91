'use client'
import Link from 'next/link'
import { ModeToggle } from '../mode-toggle'
import SiteNav from './SiteNav'

import { useAppContext } from '@/app/app-provider'
import ButtonLogout from '@/components/button-logout'

const Header = () => {
  const { user } = useAppContext()
  return (
    <header className="flex flex-col items-center justify-between border-b border-black/10 lg:flex-row p-[24px]">
      <section className="text-center lg:text-left">
        <h1 className="text-4xl font-bold">GDTN</h1>

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
                <Link href="/login">Đăng nhập</Link>
              </li>
              <li>
                <Link href="/register">Đăng ký</Link>
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
