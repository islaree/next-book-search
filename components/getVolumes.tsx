import { cache } from 'react'

export const getData = cache(async (value: string) => {
  try {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
    const data = await res.json()
    if (res.ok) return data
    else return null
  } catch (error) {
    console.log('エラーが検出されました')
    return null
  }
})
