import React from 'react'
import { Parallax } from 'react-parallax'
import Layout from '../../Layout'

const Banner = ({ dynImg, title, tagline }) => {
    return (
        <Parallax
            blur={{ min: -20, max: 20 }}
            bgImage={dynImg}
            bgImageAlt="the cat"
            strength={-200}            
        >
            <Layout>
            <div className={` h-6/6 md:h-5/6 p-10 md:p-32 bg-cover bg-center md:bg-left`}>
                <div className='text-center bg-black/50 text-white p-5 md:p-20  rounded-lg text-2xl'>
                    <h3 className='uppercase text-2xl md:text-6xl font-serif mb-3'>{title}</h3>
                    <p className='text-sm md:text-lg uppercase'>{tagline}</p>
                </div>
            </div>
            </Layout>
        </Parallax>

    )
}

export default Banner