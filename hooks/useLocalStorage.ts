import { useEffect, useState } from 'react'

export const useLocalStorage = <T,>(
  key: string,
  initialValue?: T
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue as T)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const item = window.localStorage.getItem(key)
    if (item) {
      try {
        setStoredValue(JSON.parse(item))
      } catch (error) {
        console.error('Error parsing stored value:', error)
      }
    }
  }, [key])

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.error('Error setting stored value:', error)
    }
  }

  return [storedValue, setValue]
}
