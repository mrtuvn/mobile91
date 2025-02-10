import { uploadcareLoader } from '@uploadcare/nextjs-loader'
import Image from 'next/image'
import React from 'react'
const UPLOADCARE_URL = 'https://ucarecdn.com'

const ImageGallery = ({ imageIds }: { imageIds: string[] }) => {
  return (
    <div className="bg-green-300 p-3">
      <ul className="flex flex-wrap gap-2 px-14">
        {imageIds.length > 0 &&
          imageIds?.map((imageId) => (
            <li key={imageId} className="h-[200px] flex-1 basis-[200px]">
              {imageId && (
                <Image
                  fill
                  sizes="(min-width: 1000px) 1000px, 100vw"
                  src={`${UPLOADCARE_URL}/${imageId}/-/resize/1000/`}
                  alt="image"
                  className="border-1px h-auto border-gray-500 outline-dashed"
                  loader={uploadcareLoader}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default ImageGallery
