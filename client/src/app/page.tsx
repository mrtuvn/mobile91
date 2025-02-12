import { Metadata } from 'next'
import React from 'react'
import Bunny from '../components/dynamic/Counter'

//import dynamic from 'next/dynamic'
//const Bunny = dynamic(() => import('@/components/dynamic/Bunny'), { ssr: false })

export const metadata: Metadata = {
  title: 'Trang chủ',
  description: 'Trang chủ của shop',
}

export default function Home() {
  return (
    <>
      <p className="mx-auto text-center">Homepage!</p>
      <div>
        <Bunny />
      </div>
    </>
  )
}
