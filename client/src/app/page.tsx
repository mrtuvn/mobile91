import { Metadata } from 'next'
import Bunny from '../components/dynamic/Counter'

//import dynamic from 'next/dynamic'
//const Bunny = dynamic(() => import('@/components/dynamic/Bunny'), { ssr: false })

export const metadata: Metadata = {
  title: 'Gia dụng',
  description: 'Gia dung tap hoa',
}

export default function Home() {
  return (
    <>
      <p className="mx-auto text-center">Homepage!</p>
      <div>
        <Bunny />{' '}
      </div>
    </>
  )
}
