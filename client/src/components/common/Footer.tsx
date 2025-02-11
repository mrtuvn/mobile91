'use client'
import Link from 'next/link'
import React from 'react'
import { data } from '../../settings/website-data'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1200px] bg-fuchsia-300 p-[24px]">
      <p className="container mx-auto px-14 text-center text-black">
        FOOTER CONTENT - Liên hệ qua số <Link href="">{data.telephone}</Link>
      </p>
    </footer>
  )
}

export default Footer
