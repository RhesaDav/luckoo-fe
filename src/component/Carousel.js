import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import './Carousel.css'

export default function Carousel() {
  return (
    <div>
       <Swiper
       modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={3}
      navigation={true}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src='https://images.unsplash.com/photo-1617870952348-7524edfb61b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80' className='img-carousel' />
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://previews.123rf.com/images/bogdanbrasoveanu/bogdanbrasoveanu1704/bogdanbrasoveanu170400129/75448426-hombre-elegante-y-moderno-caminando-por-las-escaleras-del-edificio-importante-con-actitud-positiva.jpg' className='img-carousel'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='https://storage.modalrakyat.id/2020/05/b1fc8c60-9a79-11ea-97f9-3d73a96c7497.jpg' className='img-carousel'/>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
