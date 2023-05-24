import React from 'react'
import Navbar from './Navbar'
import BannerSlider from '../Home/Banner/BannerSlider'

const Header = () => {
    return (
        <div>
            <div className='fixed top-0 z-10 w-full'>
                <Navbar />
            </div>
        </div>
    )
}

export default Header