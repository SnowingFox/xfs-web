import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDetail } from '../swr.ts'
import { LazyLoadImage } from 'react-lazy-load-image-component'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import clsx from 'clsx'

export const Banner: React.FC = () => {
  const { data } = useDetail()
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <div className={'space-y-4'}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIdx(swiper.activeIndex)}
      >
        {data?.imgs.map((item) => (
          <SwiperSlide
            key={item}
            className={'w-full h-[500px] bg-img-background'}
          >
            <LazyLoadImage
              onLoad={() => {
                console.log('load', item)
              }}
              className={'w-full h-full object-contain'}
              src={item}
              alt={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={'flex items-center space-x-2 w-full justify-center mt-2'}>
        {data?.imgs.map((item, index) => (
          <div
            key={item}
            className={clsx([
              'bg-quaternary-label w-[6px] h-[6px] rounded-full',
              {
                '!bg-primary': activeIdx === index,
              },
            ])}
          />
        ))}
      </div>
    </div>
  )
}
