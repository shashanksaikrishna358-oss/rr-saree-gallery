import { NextRequest, NextResponse } from 'next/server'

// Mock sarees data
const sarees: any = {
  '1': {
    id: '1',
    name: 'Premium Kanchipuram Silk Saree',
    slug: 'premium-kanchipuram-silk',
    description: 'Exquisite Kanchipuram saree with intricate zari work',
    longDescription: 'This premium Kanchipuram saree is a masterpiece of traditional weaving. Made from 100% pure silk with intricate zari work, this saree features stunning motifs and is perfect for special occasions.',
    category: 'Kanchipuram',
    price: 24999,
    salePrice: null,
    cost: 12000,
    sku: 'KAN-001',
    stock: 15,
    color: 'Maroon',
    material: 'Pure Silk',
    rating: 4.8,
    reviewCount: 45,
    images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
    isFeatured: true,
    isNew: true,
    isAvailable: true,
  },
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const saree = sarees[params.id]

    if (!saree) {
      return NextResponse.json(
        { success: false, error: 'Saree not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { success: true, data: saree },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch saree' },
      { status: 500 }
    )
  }
}
