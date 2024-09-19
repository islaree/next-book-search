import Image from 'next/image'

export const BookThumbnail = ({ src, alt }: { src?: string | undefined; alt: string }) => {
  return (
    <>
      {src ? (
        <Image
          className="h-auto w-28 rounded-lg border border-gray-200"
          src={src}
          width={128}
          height={168}
          alt={alt}
          unoptimized
        />
      ) : (
        <div className="flex h-[104px] w-20 items-center justify-center rounded border border-gray-200 bg-gray-100 text-xs font-medium italic text-gray-400">
          No image
        </div>
      )}
    </>
  )
}
