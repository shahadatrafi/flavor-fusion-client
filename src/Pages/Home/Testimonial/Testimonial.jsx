import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container mx-auto mb-28'>
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review.id}
                    >
                        <div className='mx-16 text-center'>
                            <Rating className=' mx-auto pb-6'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='my-6'>{review.details}</p>
                            <h3 className="text-3xl text-yellow-600">{review.name}</h3>
                        </div>

                    </SwiperSlide>)

                }
            </Swiper>
        </div>
    );
};

export default Testimonial;