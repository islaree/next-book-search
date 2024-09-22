export const getBooksData = async (term: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${term}&maxResults=40`)
  if (!res.ok) {
    throw new Error('Failed to fetch books data')
  }

  const data = await res.json()

  // 重複するidを排除
  const uniqueBooks = data.items.reduce((acc: any[], current: any) => {
    const x = acc.find((item) => item.id === current.id)
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])

  return { ...data, items: uniqueBooks }
}

export const getBookData = async (id: string) => {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch book data')
  }

  const data = await res.json()
  return data
}
