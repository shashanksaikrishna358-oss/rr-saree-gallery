import { NextRequest, NextResponse } from 'next/server'

// Mock sarees data
const sarees = [
  {
    id: '1',
    name: 'Premium Kanchipuram Silk Saree',
    slug: 'premium-kanchipuram-silk',
    description: 'Exquisite Kanchipuram saree with intricate zari work',
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
    isFeatured: true,
    isNew: true,
    isAvailable: true,
  },
  {
    id: '2',
    name: 'Banarasi Silk Saree',
    slug: 'banarasi-silk-saree',
    description: 'Traditional Banarasi silk with gold zari',
    category: 'Banarasi',
    price: 18999,
    salePrice: 15999,
    cost: 9000,
    sku: 'BAN-001',
    stock: 20,
    color: 'Burgundy',
    material: 'Pure Silk',
    rating: 4.6,
    reviewCount: 32,
    isFeatured: true,
    isNew: false,
    isAvailable: true,
  },
  {
    id: '3',
    name: 'Bridal Collection - Gold',
    slug: 'bridal-gold',
    description: 'Exquisite bridal saree for your special day',
    category: 'Bridal',
    price: 45999,
    salePrice: null,
    cost: 22000,
    sku: 'BRI-001',
    stock: 8,
    color: 'Gold',
    material: 'Pure Silk',
    rating: 5,
    reviewCount: 18,
    isFeatured: true,
    isNew: true,
    isAvailable: true,
  },
]

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams
    const category = searchParams.get('category')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')

    let filtered = sarees

    if (category && category !== 'all') {
      filtered = sarees.filter((s) => s.category.toLowerCase() === category.toLowerCase())
    }

    const start = (page - 1) * limit
    const end = start + limit
    const paginated = filtered.slice(start, end)

    return NextResponse.json(
      {
        success: true,
        data: paginated,
        pagination: {
          page,
          limit,
          total: filtered.length,
          pages: Math.ceil(filtered.length / limit),
        },
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sarees' },
      { status: 500 }
    )
  }
}
