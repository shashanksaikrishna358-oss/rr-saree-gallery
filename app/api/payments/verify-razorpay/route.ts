import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: NextRequest) {
  try {
    const { orderId, paymentId, signature } = await req.json()

    // Verify payment signature
    const hmac = crypto.createHmac(
      'sha256',
      process.env.RAZORPAY_KEY_SECRET || ''
    )
    hmac.update(`${orderId}|${paymentId}`)
    const generatedSignature = hmac.digest('hex')

    if (generatedSignature !== signature) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature' },
        { status: 400 }
      )
    }

    // Payment verified successfully
    return NextResponse.json(
      {
        success: true,
        message: 'Payment verified',
        data: {
          orderId,
          paymentId,
          verified: true,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}
