'use client'
import Link from 'next/link'
import { data } from '../../settings/website-data'

const Footer = () => {
  return (
    <footer className="relative mx-auto max-w-[1200px] bg-gradient-to-r from-red-600 via-orange-500 to-red-600 p-[24px]">
      <p className="container mx-auto px-14 text-center text-black">
        FOOTER CONTENT - Liên hệ qua số <Link href={`tel:${data.telephone}`}>{data.telephone}</Link>
      </p>
    </footer>
  )
}

export default Footer
