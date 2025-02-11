'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const siteRoutes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/products',
    label: 'Products',
  },
]

export default function SiteNav() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="mt-3 flex gap-x-5 text-[14px]">
        {siteRoutes.map((siteRoute) => (
          <li key={siteRoute.href}>
            <Link
              href={siteRoute.href}
              className={`text-zinc-400 transition hover:underline ${
                pathname === siteRoute.href ? 'active text-zinc-900' : ''
              }`}
            >
              {siteRoute.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
