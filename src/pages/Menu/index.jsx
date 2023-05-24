import React, { useEffect, useState } from 'react'
import Layout from '../../Layout'
import Banner from '../../components/Common/Banner'
import DynamicTitle from '../../components/DynamicTitle'
import MenuItem from '../../components/Common/MenuItem'
import Heading from '../../components/Common/Heading'
import useMenu from '../../hooks/useMenu'

const Menu = () => {
    const [menu, setMenu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')


    return (
        <div className=''>
            <DynamicTitle title='Bristo Boss | Menu' />
            <Banner dynImg={"/assets/menu/banner3.jpg"} title={"our menu"} tagline={"Would you like to try a dish?"} />
            <div className='mt-10'>
                <Heading title="TODAY'S OFFER" tagline="Don't Miss" />
            </div>
            <Layout>
                <div className="my-14">
                    <div className="grid md:grid-cols-2 gap-10">
                        {
                            offered.map((item, ind) => (
                                <MenuItem
                                    key={ind}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                    <div className='text-center mt-10'>
                        <button className='
                    hover:text-primary border-b-2 border-secondary px-5 py-3 uppercase font-semibold rounded-lg  hover:bg-[#1F2937] transition-all duration-200 ease-linear text-center
                    '>
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </Layout>

            {/* Desserts */}
            <Banner dynImg={"/assets/menu/banner3.jpg"} title={"desserts"} tagline={"Would you like to try a dish?"} />
            <Layout>
                <div className="my-14">
                    <div className="grid md:grid-cols-2 gap-10">
                        {
                            desserts.map((item, ind) => (
                                <MenuItem
                                    key={ind}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                    <div className='text-center mt-10'>
                        <button className='
                    hover:text-primary border-b-2 border-secondary px-5 py-3 uppercase font-semibold rounded-lg  hover:bg-[#1F2937] transition-all duration-200 ease-linear text-center
                    '>ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </Layout>

            {/* Pizza */}
            <Banner dynImg={"/assets/menu/banner3.jpg"} title={"pizza"} tagline={"Would you like to try a dish?"} />
            <Layout>
                <div className="my-14">
                    <div className="grid md:grid-cols-2 gap-10">
                        {
                            pizza.map((item, ind) => (
                                <MenuItem
                                    key={ind}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                    <div className='text-center mt-10'>
                        <button className='
                    hover:text-primary border-b-2 border-secondary px-5 py-3 uppercase font-semibold rounded-lg  hover:bg-[#1F2937] transition-all duration-200 ease-linear text-center
                    '>
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </Layout>

            {/* Salads */}
            <Banner dynImg={"/assets/menu/banner3.jpg"} title={"salads"} tagline={"Would you like to try a dish?"} />
            <Layout>
                <div className="my-14">
                    <div className="grid md:grid-cols-2 gap-10">
                        {
                            salads.map((item, ind) => (
                                <MenuItem
                                    key={ind}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                    <div className='text-center mt-10'>
                        <button className='
                    hover:text-primary border-b-2 border-secondary px-5 py-3 uppercase font-semibold rounded-lg  hover:bg-[#1F2937] transition-all duration-200 ease-linear text-center
                    '>
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </Layout>

            {/* Soups */}
            <Banner dynImg={"/assets/menu/banner3.jpg"} title={"soups"} tagline={"Would you like to try a dish?"} />
            <Layout>
                <div className="my-14">
                    <div className="grid md:grid-cols-2 gap-10">
                        {
                            soups.map((item, ind) => (
                                <MenuItem
                                    key={ind}
                                    item={item}
                                />
                            ))
                        }
                    </div>
                    <div className='text-center mt-10'>
                        <button className='
                    hover:text-primary border-b-2 border-secondary px-5 py-3 uppercase font-semibold rounded-lg  hover:bg-[#1F2937] transition-all duration-200 ease-linear text-center
                    '>
                            ORDER YOUR FAVOURITE FOOD
                        </button>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Menu