export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePassword = (password: string): {
  valid: boolean
  errors: string[]
} => {
  const errors: string[] = []

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain an uppercase letter')
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain a number')
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must contain a special character')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

export const validatePhone = (phone: string): boolean => {
  const re = /^[0-9]{10}$/
  return re.test(phone.replace(/[^0-9]/g, ''))
}

export const validateAddress = (address: {
  street: string
  city: string
  state: string
  postalCode: string
  phone: string
}): { valid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!address.street || address.street.trim().length < 5) {
    errors.push('Valid street address is required')
  }
  if (!address.city || address.city.trim().length < 2) {
    errors.push('Valid city is required')
  }
  if (!address.state || address.state.trim().length < 2) {
    errors.push('Valid state is required')
  }
  if (!address.postalCode || !/^[0-9]{6}$/.test(address.postalCode)) {
    errors.push('Valid postal code is required')
  }
  if (!validatePhone(address.phone)) {
    errors.push('Valid phone number is required')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
