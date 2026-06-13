import { NextRequest, NextResponse } from 'next/server'
import { verifyPassword, generateToken } from '@/lib/password'
import { validateEmail } from '@/lib/validation'

// Mock database
const users: any[] = [
  {
    id: '1',
    email: 'demo@rrsarees.com',
    name: 'Demo User',
    password: '$2a$10$Ky9DP1x7qY8gZ2mL9qN8O.uZz9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z',
  },
]

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email' },
        { status: 400 }
      )
    }

    const user = users.find((u) => u.email === email)
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 401 }
      )
    }

    const passwordMatch = await verifyPassword(password, user.password)
    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    const token = generateToken({ userId: user.id, email: user.email })

    const response = NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
          },
        },
      },
      { status: 200 }
    )

    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Login failed' },
      { status: 500 }
    )
  }
}
