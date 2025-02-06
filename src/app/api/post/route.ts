import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import {
  uploadImageToUploadcare,
  processAndStoreImage,
} from "@/lib/imageUtils";
import formidable from "formidable";
import type { NextApiRequest } from "next";

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest) {
  try {
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    const { title } = fields;
    const imageFile = files.image as formidable.File[];

    let imageUrl: string | null = null;
    if (imageFile && imageFile.length > 0) {
      const file = await Bun.file(imageFile[0].filepath).blob();
      const uuid = await uploadImageToUploadcare(file);
      imageUrl = await processAndStoreImage(uuid);
    }

    const post = await prisma.post.create({
      data: {
        title: title[0],
        imageUrl,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
