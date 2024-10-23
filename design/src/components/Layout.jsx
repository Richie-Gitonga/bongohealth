import React from 'react'
import Navbar from './Navbar'
import Aside from './Aside'

const Layout = ({ children }) => {
  return (
    <div className='relative flex justify-between -bg--secondary-color'> 
        <Navbar/>
        <div className='flex-1'>
          <header className='w-full flex items-center justify-between lg:hidden'>
            <h1>BongoHealth</h1>
            <img src="icons/menu.png" alt="" />
          </header>
          {children}
        </div>
        <Aside/>
    </div>
  )
}

export default Layout