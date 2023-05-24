import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../pages/Shared/Footer'
import Layout from '.'
import Navbar from '../pages/Shared/Navbar'
import Header from '../pages/Shared/Header'

const Main = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main