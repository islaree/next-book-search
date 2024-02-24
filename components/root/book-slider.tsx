import Image from 'next/image'

export default function SliderGroup() {
  return <SlideToLeft />
}

function SlideToLeft() {
  return (
    <div className="mx-auto flex w-[880px] overflow-hidden">
      <div className="flex min-w-[880px] animate-[slideToRight_30s_infinite_linear_0.5s_both] gap-x-4 pl-4">
        <SlideItem />
        <SlideItem imageUrl="/slide-item2.png" />
        <SlideItem imageUrl="/slide-item3.jpg" />
        <SlideItem />
        <SlideItem />
      </div>
      <div className="flex min-w-[880px] animate-[slideToRight_30s_infinite_linear_0.5s_both] gap-x-4 pl-4">
        <SlideItem />
        <SlideItem imageUrl="/slide-item2.png" />
        <SlideItem imageUrl="/slide-item3.jpg" />
        <SlideItem />
        <SlideItem />
      </div>
    </div>
  )
}

function SlideItem({ imageUrl }: { imageUrl?: string }) {
  return (
    <>
      {imageUrl ? (
        <div>
          <Image className="rounded-lg border border-gray-200 shadow-sm" src={imageUrl} width={176} height={352} alt="" />
        </div>
      ) : (
        <div className="w-1/5">
          <Image className="rounded-lg border border-gray-200 shadow-sm" src="/slide-item1.jpg" width={176} height={352} alt="" />
        </div>
      )}
    </>
  )
}
