'use client'

import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { ProductCard } from './ProductCard'

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  discount?: number;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [progress, setProgress] = useState(0)
  const swiperRef:any = useRef(null)

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, hide: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onProgress={(swiper, progress) => {
          setProgress(progress)
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-4 bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

