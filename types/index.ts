// User Types
export interface User {
  id: string
  email: string
  name?: string
  image?: string
  phone?: string
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  userId: string
  type: 'home' | 'work' | 'billing' | 'shipping'
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
  isDefault: boolean
}

// Product/Saree Types
export interface Saree {
  id: string
  name: string
  slug: string
  description: string
  longDescription?: string
  category: SareeCategory
  subcategory?: string
  price: number
  salePrice?: number
  cost: number
  sku: string
  stock: number
  reserved: number
  color: string
  pattern?: string
  material: SareeMaterial
  weight?: string
  length?: string
  rating: number
  reviewCount: number
  images: string[]
  thumbnail?: string
  isFeatured: boolean
  isNew: boolean
  isAvailable: boolean
  createdAt: Date
  updatedAt: Date
}

export type SareeCategory = 'Kanchipuram' | 'Banarasi' | 'Bridal' | 'Designer' | 'PartyWear' | 'Traditional'
export type SareeMaterial = 'Silk' | 'Cotton' | 'Blend' | 'Pure Silk' | 'Art Silk'

// Cart Types
export interface CartItem {
  id: string
  userId: string
  sareeId: string
  quantity: number
  saree?: Saree
  addedAt: Date
}

export interface Cart {
  items: CartItem[]
  total: number
  count: number
}

// Wishlist Types
export interface WishlistItem {
  id: string
  userId: string
  sareeId: string
  saree?: Saree
  addedAt: Date
}

// Order Types
export interface Order {
  id: string
  orderNumber: string
  userId: string
  status: OrderStatus
  paymentStatus: PaymentStatus
  paymentMethod?: PaymentMethod
  subtotal: number
  tax: number
  shipping: number
  discount: number
  total: number
  items: OrderItem[]
  trackingNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
  deliveredAt?: Date
}

export interface OrderItem {
  id: string
  orderId: string
  sareeId: string
  quantity: number
  price: number
  saree?: Saree
}

export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded'
export type PaymentMethod = 'razorpay' | 'upi' | 'card' | 'netbanking' | 'stripe'

// Review Types
export interface Review {
  id: string
  userId: string
  sareeId: string
  rating: number
  title: string
  content: string
  images?: string[]
  verified: boolean
  helpful: number
  unhelpful: number
  createdAt: Date
  updatedAt: Date
}

// Category Types
export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  order: number
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image?: string
  author: string
  published: boolean
  featured: boolean
  views: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Filter Types
export interface SareeFilters {
  category?: SareeCategory
  material?: SareeMaterial
  priceMin?: number
  priceMax?: number
  color?: string
  rating?: number
  inStock?: boolean
  isFeatured?: boolean
  search?: string
  page?: number
  limit?: number
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'rating' | 'popular'
}

// Razorpay Types
export interface RazorpayOrder {
  id: string
  entity: string
  amount: number
  amount_paid: number
  amount_due: number
  currency: string
  receipt: string
  status: string
  attempts: number
  notes: Record<string, any>
  created_at: number
}

export interface RazorpayPayment {
  id: string
  entity: string
  amount: number
  currency: string
  status: string
  method: string
  description: string
  notes: Record<string, any>
  created_at: number
}
