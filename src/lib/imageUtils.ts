import uploadcare from "uploadcare-js";

const uploadClient = uploadcare(process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY);

export async function uploadImageToUploadcare(file: File): Promise<string> {
  try {
    const fileObject = await uploadClient.uploadFile(file);
    const { uuid } = await fileObject.promise(); // Wait for upload to complete
    return uuid; // Return the Uploadcare file UUID
  } catch (error) {
    console.error("Error uploading to Uploadcare:", error);
    throw error;
  }
}

export async function processAndStoreImage(uuid: string): Promise<string> {
  try {
    const cdnUrl = `https://ucarecdn.com/${uuid}/-/resize/800x/`; // Example resizing URL
    return cdnUrl;
  } catch (error) {
    console.error("Error processing Uploadcare URL:", error);
    throw error;
  }
}
