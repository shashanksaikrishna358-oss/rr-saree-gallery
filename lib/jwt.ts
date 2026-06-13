import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.API_SECRET_KEY || 'your-secret-key'

export const generateToken = (data: any, expiresIn = '7d') => {
  return jwt.sign(data, SECRET_KEY, { expiresIn })
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    return null
  }
}

export const decodeToken = (token: string) => {
  try {
    return jwt.decode(token)
  } catch (error) {
    return null
  }
}
