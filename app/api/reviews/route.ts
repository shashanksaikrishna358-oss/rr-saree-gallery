import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/jwt'

// Mock reviews data
const reviews: any[] = []

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('authToken')?.value

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      )
    }

    const { sareeId, rating, title, content } = await req.json()

    if (!sareeId || !rating || !title || !content) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { success: false, error: 'Rating must be between 1 and 5' },
        { status: 400 }
      )
    }

    const review = {
      id: Math.random().toString(36).substr(2, 9),
      userId: (decoded as any).userId,
      sareeId,
      rating,
      title,
      content,
      verified: true,
      helpful: 0,
      unhelpful: 0,
      createdAt: new Date(),
    }

    reviews.push(review)

    return NextResponse.json(
      { success: true, data: review },
      { status: 201 }
    )
  } catch (error) {
    console.error('Review creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create review' },
      { status: 500 }
    )
  }
}
