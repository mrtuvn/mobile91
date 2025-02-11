'use server'

import prisma from '../lib/db'
import crypto from 'crypto'

const getImageIds = async () => {
  const images = await prisma.image.findMany()

  return images.map((image: unknown) => image.ucareId)
}

export default getImageIds

export async function getSignature(secret = process.env.UPLOADCARE_SECRET_KEY, expire) {
  function generateSignature() {
    const hmac = crypto.createHmac('sha256', secret)
    hmac.update(expire)
    return hmac.digest('hex')
  }

  expire = (Math.round(Date.now() / 1000) + 120).toString()
  const signature = generateSignature(process.env.UPLOADCARE_SECRET_KEY, expire)

  return { expire, signature }
}
