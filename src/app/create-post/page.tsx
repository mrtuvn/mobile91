'use client'

import { useState, useEffect, useRef } from 'react'
import { FileUploaderRegular } from '@uploadcare/react-uploader/next'
import '@uploadcare/react-uploader/core.css'
import ImageGallery from '../../components/ImageGallery'
import { OutputFileEntry, UploadCtxProvider } from '@uploadcare/react-uploader'
import getImageIds, { getSignature } from '@/actions/actions'

export default function CreatePost() {
  const [imageIds, setImageIds] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState<OutputFileEntry[]>([])
  const ctxProviderRef = useRef<typeof UploadCtxProvider.prototype & UploadCtxProvider>(null)
  const [signature, setSignature] = useState({
    signature: '',
    expire: '',
  })

  useEffect(() => {
    const handleUpload = (e: CustomEvent<OutputFileEntry[]>) => {
      if (e.detail) {
        setImageIds((prev) => [...prev, e.detail[0].uuid].filter(Boolean) as string[])
      }
    }

    // ? mark to avoid double add event listener
    ctxProviderRef.current?.addEventListener('upload-finish', handleUpload)

    return () => {
      // clean up to remove event listener
      ctxProviderRef.current?.removeEventListener('upload-finish', handleUpload)
    }
  }, [])

  useEffect(() => {
    const handleDone = () => {
      const newImageIds = uploadedFiles.map((file) => file.uuid).filter(Boolean) as string[]

      setImageIds((prev) => [...prev, ...newImageIds])
      setUploadedFiles([])

      ctxProviderRef.current?.uploadCollection.clearAll()
    }

    // ? mark to avoid double add event listener
    ctxProviderRef.current?.addEventListener('done-finish', handleDone)

    return () => {
      // clean up to remove event listener
      ctxProviderRef.current?.removeEventListener('done-finish', handleDone)
    }
  }, [uploadedFiles])

  useEffect(() => {
    getImageIds().then((ids) => setImageIds(ids))
  }, [])

  useEffect(() => {
    getSignature().then((signature) => setSignature(signature))
  }, [])

  return (
    <div className="min-h-screen bg-white text-black">
      <div>
        <FileUploaderRegular
          sourceList="local, camera, facebook, gdrive"
          cameraModes="video, photo"
          secureSignature="e7d70edba71db8912d139c530daae31a092ef46b4eb69c894be43be16c0d2b74"
          secureExpire={1738829706}
          classNameUploader="uc-light"
          pubkey="97ac46959110b1d6c4a2"
          ref={ctxProviderRef}
          secure-signature={signature.signature}
          secure-expire={signature.expire}
        />
      </div>

      <div className="bg-blue p-3">
        <ImageGallery imageIds={imageIds} />
      </div>
    </div>
  )
}
