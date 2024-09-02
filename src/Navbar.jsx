import React from 'react'

export default function Navbar() {
    const navItems = ["About Me", "Experiences", "Recommended"];
  
    return (
      <div>
        <div className='flex justify-between px-4 w-98 bg-black h-14 items-center rounded-3xl text-gray-400'>
          <button className='flex bg-neutral-900 font-medium hover:bg-slate-800 hover:bg-opacity-100 hover:text-white hover:scale-110 transition duration-200 ease-in-out  rounded-2xl p-2 h-11 w-40  place-content-center place-items-center cursor-pointer hover:shadow-2xl hover:shadow-black'>About Me</button>
          <button className='flex bg-neutral-900 font-medium hover:bg-slate-800 hover:bg-opacity-100 hover:text-white hover:scale-110 transition duration-200 ease-in-out  rounded-2xl p-2 h-11 w-40  place-content-center place-items-center cursor-pointer hover:shadow-2xl hover:shadow-black'>Experiences</button>
          <button className='flex bg-neutral-900 font-medium hover:bg-slate-800 hover:bg-opacity-100 hover:text-white hover:scale-110 transition duration-200 ease-in-out  rounded-2xl p-2 h-11 w-40  place-content-center place-items-center cursor-pointer hover:shadow-2xl hover:shadow-black'>Recommended</button>
        </div>
      </div>
    );
  }