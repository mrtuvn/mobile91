export const dynamic = 'force-dynamic'

import productApiRequest from '@/apiRequests/product'
import ProductAddButton from '@/app/products/_components/product-add-button'
import ProductEditButton from '@/app/products/_components/product-edit-button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm',
  description: 'Danh sách sản phẩm của Productic, được tạo bởi Được dev',
}

export default async function ProductListPage() {
  const { payload } = await productApiRequest.getList()
  const productList = payload.data
  return (
    <div className="space-y-3">
      <h1>Product List</h1>
      <ProductAddButton />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productList.map((product: any) => (
              <div key={product.id} className="group relative">
                <Image
                  alt={product.name}
                  src={product.image}
                  width={300}
                  height={300}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/products/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  <span className="animate-bounce">Fs</span>
                  <ProductEditButton product={product} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
