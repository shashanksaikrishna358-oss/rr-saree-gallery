import { NextRequest, NextResponse } from 'next/server'

// Mock reviews data
const reviews: any[] = []

export async function GET(
  req: NextRequest,
  { params }: { params: { sareeId: string } }
) {
  try {
    const sareeReviews = reviews.filter(
      (r) => r.sareeId === params.sareeId
    )

    return NextResponse.json(
      { success: true, data: sareeReviews },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    )
  }
}
