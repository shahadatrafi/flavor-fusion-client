import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <div className='container mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
                {
                    reviews.map(review => <SwiperSlide
                    key={review.id}
                    >


                    </SwiperSlide>)

        }
      </Swiper>
        </div>
    );
};

export default Testimonial;