import axios from 'axios'
import { Saree, SareeFilters, PaginatedResponse } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

const apiClient = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 10000,
})

// Saree APIs
export const sareeAPI = {
  getAllSarees: async (filters?: SareeFilters) => {
    const response = await apiClient.get<PaginatedResponse<Saree>>(
      '/sarees',
      { params: filters }
    )
    return response.data
  },

  getSareeById: async (id: string) => {
    const response = await apiClient.get<Saree>(`/sarees/${id}`)
    return response.data
  },

  getSareesByCategory: async (category: string, limit = 10) => {
    const response = await apiClient.get<Saree[]>(
      `/sarees/category/${category}`,
      { params: { limit } }
    )
    return response.data
  },

  getFeaturedSarees: async () => {
    const response = await apiClient.get<Saree[]>('/sarees/featured')
    return response.data
  },

  searchSarees: async (query: string) => {
    const response = await apiClient.get<Saree[]>('/sarees/search', {
      params: { q: query },
    })
    return response.data
  },
}

// Order APIs
export const orderAPI = {
  createOrder: async (items: any[], shippingAddress: any) => {
    const response = await apiClient.post('/orders', {
      items,
      shippingAddress,
    })
    return response.data
  },

  getOrders: async () => {
    const response = await apiClient.get('/orders')
    return response.data
  },

  getOrderById: async (id: string) => {
    const response = await apiClient.get(`/orders/${id}`)
    return response.data
  },

  updateOrderStatus: async (id: string, status: string) => {
    const response = await apiClient.put(`/orders/${id}`, { status })
    return response.data
  },
}

// Payment APIs
export const paymentAPI = {
  createRazorpayOrder: async (amount: number, currency = 'INR') => {
    const response = await apiClient.post('/payments/razorpay-order', {
      amount,
      currency,
    })
    return response.data
  },

  verifyRazorpayPayment: async (
    orderId: string,
    paymentId: string,
    signature: string
  ) => {
    const response = await apiClient.post('/payments/verify-razorpay', {
      orderId,
      paymentId,
      signature,
    })
    return response.data
  },
}

// Review APIs
export const reviewAPI = {
  getReviewsBySaree: async (sareeId: string) => {
    const response = await apiClient.get(`/reviews/saree/${sareeId}`)
    return response.data
  },

  createReview: async (sareeId: string, rating: number, comment: string) => {
    const response = await apiClient.post('/reviews', {
      sareeId,
      rating,
      comment,
    })
    return response.data
  },
}

// Auth APIs
export const authAPI = {
  register: async (email: string, password: string, name: string) => {
    const response = await apiClient.post('/auth/register', {
      email,
      password,
      name,
    })
    return response.data
  },

  login: async (email: string, password: string) => {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    })
    return response.data
  },

  logout: async () => {
    const response = await apiClient.post('/auth/logout')
    return response.data
  },
}

export default apiClient
