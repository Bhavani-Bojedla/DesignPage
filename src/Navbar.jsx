import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className='flex items-center justify-between px-4 text-gray-400 bg-black 2560:w-100 lg:w-98 h-14 rounded-3xl'>
        <button className='flex p-2 mr-5 font-medium cursor-pointer 2560:w-60 lg:w-40 bg-neutral-900 hover:bg-side-1 hover:text-white hover:scale-110 rounded-2xl h-11 place-content-center place-items-center hover:shadow-2xl hover:shadow-black'>
          About Me
        </button>
        <button className='flex p-2 mr-5 font-medium cursor-pointer lg:w-40 2560:w-60 bg-neutral-900 hover:bg-side-1 hover:text-white hover:scale-110 rounded-2xl h-11 place-content-center place-items-center hover:shadow-2xl hover:shadow-black'>
          Experiences
        </button>
        <button className='flex p-2 font-medium cursor-pointer lg:w-40 2560:w-60 bg-neutral-900 hover:bg-side-1 hover:text-white hover:scale-110 rounded-2xl h-11 place-content-center place-items-center hover:shadow-2xl hover:shadow-black'>
          Recommended
        </button>
      </div>
    </div>
  );
}
