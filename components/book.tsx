'use client'

export default function Book({ smallThumbnail }: { smallThumbnail: string }) {
  return <div>{smallThumbnail !== '404' ? <img src={smallThumbnail} /> : <div>not found 404</div>}</div>
}
