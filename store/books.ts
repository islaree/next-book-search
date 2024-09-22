import { bookItems } from '@/types/book'
import { create } from 'zustand'

interface SearchState {
  books: bookItems[]
  setBooks: (data: bookItems[]) => void
}

export const useBookStore = create<SearchState>((set) => ({
  books: [],
  setBooks: (data) => set({ books: [...data] }),
}))
