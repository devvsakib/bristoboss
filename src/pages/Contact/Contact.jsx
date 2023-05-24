import { FaClock, FaLocationArrow, FaPhone } from 'react-icons/fa'
import Banner from '../../components/Common/Banner'
import Heading from '../../components/Common/Heading'
import Layout from '../../Layout'
const Contact = () => {
    return (
        <div>
            <Banner dynImg={"/assets/contact/banner.jpg"} title={"Contact Us"} tagline={"Would you like to try a dish?"} />
            <div className='my-32'>
                <Layout>
                    <Heading title="Our location" tagline="Visit Us" />
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-32'>
                        <div className='text-center flex flex-col items-center'>
                            <div className='text-center bg-[#D1A054] text-white py-5 w-full'><FaPhone className='mx-auto' /></div>
                            <div className='w-full pb-5 px-5 border'>
                                <div className='bg-[#F3F3F3] h-24'>
                                    <h3>Phone</h3>
                                    <p>+91 1234567890</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center flex flex-col items-center'>
                            <div className='text-center bg-[#D1A054] text-white py-5 w-full'><FaLocationArrow className='mx-auto' /></div>
                            <div className='w-full pb-5 px-5 border'>
                                <div className='bg-[#F3F3F3] h-24'>
                                    <h3>Address</h3>
                                    <p>123, Lorem ipsum dolor sit .</p>
                                </div>
                            </div>
                        </div>
                        <div className='text-center flex flex-col items-center'>
                            <div className='text-center bg-[#D1A054] text-white py-5 w-full'><FaClock className='mx-auto' /></div>
                            <div className='w-full pb-5 px-5 border'>
                                <div className='bg-[#F3F3F3] h-24'>
                                    <h3>working hours</h3>
                                    <p> - Fri: 08:00 - 22:00 <br />
                                        Sat - Sun: 10:00 - 23:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Heading title="contact form" tagline="Send us a Message" />
                    <div className='bg-[#F3F3F3]'>

                    </div>
                </Layout>
            </div >
        </div >
    )
}

export default Contact