import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'

interface UseApiResponse<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export const useApi = <T,>(
  apiCall: () => Promise<T>
): UseApiResponse<T> & {
  execute: () => Promise<void>
} => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await apiCall()
      setData(result)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'An error occurred'
      setError(message)
      toast.error(message)
    } finally {
      setLoading(false)
    }
  }, [apiCall])

  return { data, loading, error, execute }
}
