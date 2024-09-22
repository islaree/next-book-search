import { BookList } from '@/components/book-list'
import { SearchBar } from '@/components/search-bar'

export default function SearchPage() {
  return (
    <div className="space-y-4">
      <div className="px-6">
        <SearchBar />
      </div>
      <BookList />
    </div>
  )
}
