import { bookItems } from '@/types/book'
import { create } from 'zustand'

interface SearchState {
  library: bookItems[]
  addLibrary: (data: bookItems) => void
  removeLibrary: (bookId: string) => void
}

export const useLibraryStore = create<SearchState>((set) => ({
  library: [],
  addLibrary: (data) => set((state) => ({ library: [...state.library, data] })),
  removeLibrary: (bookId) =>
    set((state) => ({
      library: state.library.filter((book) => book.id !== bookId),
    })),
}))
