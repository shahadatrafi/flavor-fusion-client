import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <div className='container mx-auto mb-28'>
            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={'ORDER ONLINE'}
            ></SectionTitle>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <div><h4 className='text-3xl text-center font-mono uppercase -mt-12 pb-16 text-white '>Salads</h4></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <div><h4 className='text-3xl text-center font-mono uppercase -mt-12 pb-16 text-white '>pizzas</h4></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <div><h4 className='text-3xl text-center font-mono uppercase -mt-12 pb-16 text-white '>Soups</h4></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <div><h4 className='text-3xl text-center font-mono uppercase -mt-12 pb-16 text-white '>desserts</h4></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <div><h4 className='text-3xl text-center font-mono uppercase -mt-12 pb-16 text-white '>Salads</h4></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Category;