export const getBooksData = async (term: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}`)
  if (!res.ok) {
    throw new Error('Failed to fetch books data')
  }
  const data = await res.json()
  return data
}
