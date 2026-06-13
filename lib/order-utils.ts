export const generateOrderNumber = (): string => {
  const prefix = 'RR'
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0')
  return `${prefix}-${timestamp}-${random}`
}

export const formatCurrency = (amount: number, currency = 'INR'): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(amount)
}

export const calculateTax = (amount: number, taxRate = 0.18): number => {
  return amount * taxRate
}

export const calculateDiscount = (amount: number, discountPercent: number): number => {
  return amount * (discountPercent / 100)
}

export const calculateShipping = (amount: number, freeShippingThreshold = 5000): number => {
  if (amount >= freeShippingThreshold) return 0
  return 200 // Flat shipping rate
}
