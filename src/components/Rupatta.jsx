import React, { useEffect } from 'react';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Data = [/* your existing product data */];

const testimonials = [
    {
        name: "Anjali Sharma",
        content: "Absolutely loved the dress quality and fit! Will definitely shop again.",
        designation: "Fashion Blogger",
        image: "img1.jpg",
    },
    {
        name: "Ritika Mehra",
        content: "Affordable pricing with premium feel. The delivery was also quick!",
        designation: "Designer",
        image: "img3.jpg",
    },
    {
        name: "Neha Sinha",
        content: "Amazing collection! The mini dress I bought was super comfy and elegant.",
        designation: "Model",
        image: "img5.jpg",
    }
];

const Rupatta = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <>
            <div>
               
            </div>

            {/* <Card products={Data} /> */}

            {/* Swiper Testimonials */}
            <div className="py-8 bg-gray-100 mt-16">
                 <h2 className="text-4xl font-bold text-center uppercase mb-2 text-gray-800">
               What Our Customers Say
                </h2>
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-8 rounded-xl  text-center">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                                    />
                                    <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                                    <h4 className="font-semibold text-lg text-pink-500">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Rupatta;
