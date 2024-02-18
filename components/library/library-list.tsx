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
        <ul className="g:col-auto mt-6 flex flex-col lg:grid lg:grid-cols-2">
          {data.map((book: any) => (
            <li key={book.id}>
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
