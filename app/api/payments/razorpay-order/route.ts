import { NextRequest, NextResponse } from 'next/server'
import Razorpay from 'razorpay'
import { generateOrderNumber } from '@/lib/order-utils'

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
})

export async function POST(req: NextRequest) {
  try {
    const { amount, currency = 'INR', orderId } = await req.json()

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      )
    }

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: orderId || generateOrderNumber(),
      notes: {
        orderId: orderId || 'N/A',
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: {
          id: order.id,
          amount: order.amount / 100,
          currency: order.currency,
          status: order.status,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Razorpay order creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create payment order' },
      { status: 500 }
    )
  }
}
