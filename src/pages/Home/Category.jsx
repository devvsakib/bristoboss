import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from '../../components/Common/Heading';

const Category = () => {
    const images = ["salads", "soups", "pizzas", "desserts"]
    return (
        <div className='my-24'>
            <Heading title='order Online' tagline='From 11:00am to 10:00pm' />
            <Swiper
                  slidesPerView={1}
                  spaceBetween={30}c
                  centeredSlides={true}
                  pagination={{
                      clickable: true,
                  }}
                  loop={true}
                  modules={[Pagination]}
                  breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                        centeredSlides: false,
                    },
                }}

                
            >
                {
                    images.map((items, ind) => (
                        <SwiperSlide>
                            <div className="relative md:mr-10">
                                <div className='before:content-[""] before:w-full before:h-full justify-center items-center relative before:absolute before:bg-black/30'>
                                    <img className='w-full h-full object-cover' src={`/assets/home/slide${ind + 1}.jpg`} />
                                </div>
                                <h2 className='uppercase text-2xl font-semibold text-white absolute bottom-10 right-[37%] z-40'>{items}</h2>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Category