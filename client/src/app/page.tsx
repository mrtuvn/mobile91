import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của shop',
}

export default function Home() {
  return (
    <>
      <p className="mx-auto text-center">Homepage!</p>
    </>
  )
}
