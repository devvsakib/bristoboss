import React from 'react'
import Layout from '../../Layout'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const menu = [
        { name: 'Home', path: '/' },
        { name: 'Contact us', path: '/contact' },
        { name: 'dashboard', path: '/dashboard' },
        { name: 'our menu', path: '/menu' },
        { name: 'our shop', path: '/shop' }
    ]

    return (
        <div className="bg-black/40 text-white">
            <Layout>
                <div className='navbar'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl">Bristo Boss</a>
                    </div>
                    <div className="navbar-end gap-3">
                        <div className="navbar-right hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {menu.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.path} className="text-md uppercase font-semibold btn-ghost btn-sm">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {
                            true &&
                            <>
                                <button className='text-md uppercase btn-ghost btn-sm font-semibold'>Logout</button>
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://github.com/devvsakib.png" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <a className="justify-between">
                                                Profile
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                            </>
                        }

                        {/* <a className="btn">Get started</a> */}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Navbar