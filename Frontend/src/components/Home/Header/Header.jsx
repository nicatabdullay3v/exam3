import React from 'react'
import "./Header.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Header = () => {
    return (
        <>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              
            
            >
                <SwiperSlide> <header>

                    <div className="container">
                        <div className="header">
                            <div className="text">
                                <div className="title">
                                    <h1>Tasty & Delicious Food</h1>
                                </div>
                                <div className="button">
                                    <button>Book a table</button>
                                </div>
                            </div>

                            <div className="form">
                                <input placeholder='Name' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input type="date" />
                                <input placeholder='Person' type="text" />
                                <button>Book a table</button>
                            </div>
                        </div>
                    </div>
                </header></SwiperSlide>
                <SwiperSlide> <header>

                    <div className="container">
                        <div className="header">
                            <div className="text">
                                <div className="title">
                                    <h1>Tasty & Delicious Food</h1>
                                </div>
                                <div className="button">
                                    <button>Book a table</button>
                                </div>
                            </div>

                            <div className="form">
                                <input placeholder='Name' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input type="date" />
                                <input placeholder='Person' type="text" />
                                <button>Book a table</button>
                            </div>
                        </div>
                    </div>
                </header></SwiperSlide>
                <SwiperSlide> <header>

                    <div className="container">
                        <div className="header">
                            <div className="text">
                                <div className="title">
                                    <h1>Tasty & Delicious Food</h1>
                                </div>
                                <div className="button">
                                    <button>Book a table</button>
                                </div>
                            </div>

                            <div className="form">
                                <input placeholder='Name' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input type="date" />
                                <input placeholder='Person' type="text" />
                                <button>Book a table</button>
                            </div>
                        </div>
                    </div>
                </header></SwiperSlide>
                <SwiperSlide> <header>

                    <div className="container">
                        <div className="header">
                            <div className="text">
                                <div className="title">
                                    <h1>Tasty & Delicious Food</h1>
                                </div>
                                <div className="button">
                                    <button>Book a table</button>
                                </div>
                            </div>

                            <div className="form">
                                <input placeholder='Name' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input placeholder='Phone' type="text" />
                                <input type="date" />
                                <input placeholder='Person' type="text" />
                                <button>Book a table</button>
                            </div>
                        </div>
                    </div>
                </header></SwiperSlide>
            </Swiper>
        </>
    )
}

export default Header