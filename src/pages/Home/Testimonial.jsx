import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Heading from "../../components/Common/Heading"
import { useEffect, useState } from "react"
import Rating from "react-rating"
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa"

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch("/reviews.json")
            .then(res => res.json())
            .then(data => {
                setTestimonials(data)
            })
    }, [])
    return (
        <div className='my-32'>
            <Heading title='Testimonials' tagline='What our clients say' />
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    modules={[Navigation]}
               >
                    {
                        testimonials.map((review, ind) => (
                            <SwiperSlide>
                                <div className="text-center py-14">
                                    <div className='text-primary text-4xl mb-5'>
                                        <Rating
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            fullSymbol={<FaStar />}
                                            initialRating={review.rating}
                                        />
                                    </div>
                                    <FaQuoteLeft className='mx-auto text-7xl mb-4' />
                                    <p className='uppercase font-ragular text-secondary font-semibold'>{review.details}</p>
                                    <h2 className='uppercase text-2xl font-semibold text-primary'>{review.name}</h2>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </div>
    )
}

export default Testimonial