'use client'

import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'

export default function Carousel() {
  return (
    <>
      <Swiper spaceBetween={30} slidesPerView={2.5} navigation={true} speed={1000} className="h-full w-full">
        <SwiperSlide>
          <Card title="cache">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At obcaecati, fuga explicabo saepe maxime, voluptas iste porro laudantium fugit nesciunt
            neque perferendis nihil quia ex sint assumenda error sed ducimus.
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card title="server fetch">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At obcaecati, fuga explicabo saepe maxime, voluptas iste porro laudantium fugit nesciunt
            neque perferendis nihil quia ex sint assumenda error sed ducimus.
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card title="components">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At obcaecati, fuga explicabo saepe maxime, voluptas iste porro laudantium fugit nesciunt
            neque perferendis nihil quia ex sint assumenda error sed ducimus.
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card title="clone">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At obcaecati, fuga explicabo saepe maxime, voluptas iste porro laudantium fugit nesciunt
            neque perferendis nihil quia ex sint assumenda error sed ducimus.
          </Card>
        </SwiperSlide>
        <SlideNavigation />
      </Swiper>
    </>
  )
}

function Card({ title, children }: { title: string; children: string }) {
  return (
    <div className="rounded-lg bg-white p-6">
      <h3 className="mb-6 text-[24px] font-semibold">{title}</h3>
      <p className="text-lg">{children}</p>
    </div>
  )
}

function SlideNavigation() {
  return (
    <div className="text-right">
      <SlidePrevButton />
      <SlideNextButton />
    </div>
  )
}

function SlideNextButton() {
  const swiper = useSwiper()
  return <button onClick={() => swiper.slideNext()}>next</button>
}

function SlidePrevButton() {
  const swiper = useSwiper()
  return <button onClick={() => swiper.slidePrev()}>prev</button>
}
