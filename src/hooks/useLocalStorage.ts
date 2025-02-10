import { useEffect, useState } from 'react'

//(value: T) => void meaning setter function
// Or you can use React.Dispatch<React.SetStateAction<T>>
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem('value') || JSON.stringify(initialValue))
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as const
}
