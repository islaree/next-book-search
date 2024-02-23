import Image from 'next/image'

export default function SlideToLeft() {
  return (
    <div className="mx-auto flex w-full gap-x-4 overflow-hidden">
      <div className="flex min-w-[100rem] animate-[slideToRight_30s_infinite_linear_0.5s_both] gap-x-4">
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
      <div className="flex min-w-[100rem] animate-[slideToRight_30s_infinite_linear_0.5s_both] gap-x-4">
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
    </div>
  )
}

export function SlideToRight() {
  return (
    <div className="mx-auto flex w-full flex-row-reverse gap-x-4 overflow-hidden">
      <div className="flex min-w-[100rem] animate-[slideToLeft_30s_infinite_linear_0.5s_both] gap-x-4">
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
      <div className="flex min-w-[100rem] animate-[slideToLeft_30s_infinite_linear_0.5s_both] gap-x-4">
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
        <SlideItem />
      </div>
    </div>
  )
}

function SlideItem() {
  return (
    <div className="w-1/5 rounded bg-gray-200">
      <Image className="rounded-lg border border-gray-200" src="/book-sample.png" width={186} height={240} alt="" />
    </div>
  )
}
