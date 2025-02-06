import prisma from '@/lib/db'

export async function POST(request: Request) {
  const body = await request.json()

  try {
    await prisma.image.create({
      data: {
        ucareId: body.data.uuid,
      },
    })

    console.log('image uploaded to prisma')
  } catch (error) {
    console.error(error)
  }
}
