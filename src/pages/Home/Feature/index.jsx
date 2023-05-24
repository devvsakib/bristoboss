import React from 'react'
import Heading from '../../../components/Common/Heading'
import Layout from '../../../Layout'

const Feature = () => {
    return (
        <div className='bg-[url(/assets/home/featured.jpg)] bg-right bg-coverbg-no-repeat mt-20 bg-fixed'>
            <div className='bg-black/60 text-white w-full h-full  py-20 px-10 '>
                <Layout>
                    <Heading tagline='from our menu' title='Check it out' />
                    <div className='grid md:grid-cols-2 gap-10 items-center'>
                        <div>
                            <img src="" alt="" srcset="/assets/home/featured.jpg" />
                        </div>
                        <div>
                            <p>March 20, 2023</p>
                            <h3 className='text-xl'>WHERE CAN I GET SOME?</h3>
                            <p className='my-5'>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <button className="hover:text-primary border-b-2 border- px-5 py-3 uppercase font-semibold rounded-lg  hover:bg-white transition-all duration-200 ease-linear">read more</button>

                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default Feature