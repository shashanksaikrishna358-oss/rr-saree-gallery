import { CldUploadWidget } from 'next-cloudinary'
import { CldImage } from 'next-cloudinary'

export const uploadImage = async (
  file: File,
  folder = 'rr-saree-gallery'
): Promise<string> => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', 'rr-saree')
  formData.append('folder', folder)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )

  const data = await response.json()
  return data.secure_url
}

export const deleteImage = async (publicId: string): Promise<boolean> => {
  try {
    const response = await fetch('/api/images/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ publicId }),
    })
    return response.ok
  } catch (error) {
    console.error('Error deleting image:', error)
    return false
  }
}

export { CldUploadWidget, CldImage }
