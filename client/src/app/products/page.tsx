export const dynamic = 'force-dynamic'

import productApiRequest from '@/apiRequests/product'
import ProductAddButton from '@/app/products/_components/product-add-button'
import ProductEditButton from '@/app/products/_components/product-edit-button'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IProduct } from '../../types/IProduct'

export const metadata: Metadata = {
  title: 'Danh sách sản phẩm',
  description: 'Danh sách sản phẩm của Productic',
}

export default async function ProductListPage() {
  const { payload } = await productApiRequest.getList()
  const productList = payload.data
  return (
    <div className="space-y-3">
      <h1>Sản phẩm mới</h1>
      <ProductAddButton />

      <div className="bg-white">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {productList.map((product: IProduct) => (
              <div key={product.id} className="group relative">
                <Image
                  alt={product.name}
                  src={product.image}
                  width={100}
                  height={100}
                  className=" w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
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
                  <p className="text-sm font-medium text-gray-900 animate-bounce">
                    ${product.price}
                  </p>

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
