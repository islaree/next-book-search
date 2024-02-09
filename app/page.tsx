import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>welcome come to Books App</div>
      <div>
        this app is easy to searching books
        <br />
      </div>
      <div className="flex flex-col gap-y-4">
        <Link href="/search">本を検索してみる</Link>
        <Link href="/library">マイライブラリを確認する</Link>
      </div>
    </>
  )
}
