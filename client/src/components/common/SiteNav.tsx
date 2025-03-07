'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const siteRoutes = [
  {
    href: '/',
    label: 'Trang chủ',
  },
  {
    href: '/products',
    label: 'Sản phẩm mới',
  },
  // {
  //   href: '/sales',
  //   label: 'Khuyến mãi',
  // },
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
              className={`text-zinc-600 transition hover:underline ${
                pathname === siteRoute.href ? 'active text-zinc-700 underline' : ''
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
