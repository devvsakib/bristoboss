import React from 'react'

const Heading = ({ tagline, title }) => {
    return (
        <div className='flex flex-col items-center justify-center text-center mb-14'>
            <hp className='text-xl text-primary mb-5'>---{tagline}---</hp>
            <h2 className='text-2xl md:text-4xl uppercase py-5 border-y-4 px-10'>{title}</h2>
        </div>
    )
}

export default Heading