import LibraryItem from './library-item'

type LibraryListProps = {
  id: string
  title: string
  thumbnail: string | null
  authors: string | null
  publisher: string | null
}

export default function LibraryList({ data }: { data: LibraryListProps[] }) {
  return (
    <>
      {data.length > 0 ? (
        <ul className="mt-6 flex flex-col">
          {data.map((book: any) => (
            <li key={book.id} className="px-6 py-4">
              <LibraryItem book={book} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-md mt-6 px-6 text-slate-400">マイライブラリに追加した本がありません</div>
      )}
    </>
  )
}
