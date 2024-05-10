import React from 'react'
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='flex flex-row px-20 gap-10 bg-gray-900 text-white py-4'>
        <h1>BINGEIT</h1>

        <div className='menu-container flex flex-row items-center'>
            <FaBars/>
            <h1>MENU</h1>
        </div>

        <div className='searchbar-container'>
            <input type="text" placeholder='Search...' className='border w-96' />
        </div>
    </nav>
  )
}

export default Navbar