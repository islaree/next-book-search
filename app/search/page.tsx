import { BookList } from '@/components/book-list'
import { SearchInput } from '@/components/search-bar'

export default function SearchPage() {
  return (
    <div className="space-y-4">
      <div className="px-6">
        <SearchInput />
      </div>
      <BookList />
    </div>
  )
}
