import React from 'react'
import "./Guests.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Guests = () => {
    return (
        <section id='guests'>
            <div className="container">
                <div className="guests">
                    <div className="text">

                        <div className="name">
                            <p>GUESTS SAYS</p>
                        </div>
                        <div className="title">
                            <h1>Our Satisfied Guests says</h1>
                        </div>
                    </div>
                    <div className="cards">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide><div className="card">
                                <div className="card_image">
                                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
                                </div>
                                <div className="stars">
                                    *****
                                </div>
                                <div className="description">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="name">
                                    <p>Denis Grenn</p>
                                </div>
                                <div className="country">
                                    <p>Guests from italy</p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="card">
                                <div className="card_image">
                                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
                                </div>
                                <div className="stars">
                                    *****
                                </div>
                                <div className="description">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="name">
                                    <p>Denis Grenn</p>
                                </div>
                                <div className="country">
                                    <p>Guests from italy</p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="card">
                                <div className="card_image">
                                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
                                </div>
                                <div className="stars">
                                    *****
                                </div>
                                <div className="description">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="name">
                                    <p>Denis Grenn</p>
                                </div>
                                <div className="country">
                                    <p>Guests from italy</p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="card">
                                <div className="card_image">
                                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
                                </div>
                                <div className="stars">
                                    *****
                                </div>
                                <div className="description">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                                <div className="name">
                                    <p>Denis Grenn</p>
                                </div>
                                <div className="country">
                                    <p>Guests from italy</p>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Guests  
