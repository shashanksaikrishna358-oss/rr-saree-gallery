import { NextRequest, NextResponse } from 'next/server'
import { hashPassword, generateToken } from '@/lib/password'
import { validateEmail, validatePassword } from '@/lib/validation'

// Mock database - replace with actual Prisma calls
const users: any[] = []

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json()

    // Validation
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const passwordValidation = validatePassword(password)
    if (!passwordValidation.valid) {
      return NextResponse.json(
        { success: false, error: passwordValidation.errors[0] },
        { status: 400 }
      )
    }

    // Check if user exists
    if (users.some((u) => u.email === email)) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 409 }
      )
    }

    // Hash password
    const hashedPassword = await hashPassword(password)

    // Create user
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      password: hashedPassword,
      createdAt: new Date(),
    }
    users.push(user)

    // Generate token
    const token = generateToken({ userId: user.id, email: user.email })

    const response = NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        data: {
          user: {
            id: user.id,
            email: user.email,
            name: user.name,
          },
        },
      },
      { status: 201 }
    )

    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60,
    })

    return response
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { success: false, error: 'Registration failed' },
      { status: 500 }
    )
  }
}
