import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='max-w-[1300px] flex-1 mx-auto px-5 md:px-10'>
        {children}
    </main>
  )
}

export default Layout