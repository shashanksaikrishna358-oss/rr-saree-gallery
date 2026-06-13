import { NextRequest, NextResponse } from 'next/server'
import { generateOrderNumber } from '@/lib/order-utils'

// Mock orders data
const orders: any[] = []

export async function POST(req: NextRequest) {
  try {
    const { userId, items, shippingAddress, paymentMethod } = await req.json()

    // Validate input
    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Cart is empty' },
        { status: 400 }
      )
    }

    if (!shippingAddress) {
      return NextResponse.json(
        { success: false, error: 'Shipping address is required' },
        { status: 400 }
      )
    }

    // Calculate totals
    const subtotal = items.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    )
    const tax = Math.round(subtotal * 0.18)
    const shipping = subtotal >= 50000 ? 0 : 200
    const total = subtotal + tax + shipping

    // Create order
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      orderNumber: generateOrderNumber(),
      userId,
      items,
      shippingAddress,
      subtotal,
      tax,
      shipping,
      total,
      status: 'pending',
      paymentStatus: 'pending',
      paymentMethod: paymentMethod || 'razorpay',
      createdAt: new Date(),
    }

    orders.push(order)

    return NextResponse.json(
      {
        success: true,
        message: 'Order created successfully',
        data: order,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get('userId')

    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      )
    }

    const userOrders = orders.filter((o) => o.userId === userId)

    return NextResponse.json(
      { success: true, data: userOrders },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}
