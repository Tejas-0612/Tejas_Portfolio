import React from 'react'

const Header = () => {
  return (
    <div className='z-30 sticky top-0 w-full border-b border-black bg-gray max-md:border-gray-100 backdrop-blur-lg'>
        <div className='mx-auto flex w-full max-w-7xl items-center justify-between p-3 md:p-4 md:px-8'>
            <div>
                <span className="text-2xl md:text-3xl"> &lt;</span>
                <span className="xyz  text-red-500 text-2xl md:text-3xl">Tejas</span>
                <span className="text-2xl md:text-3xl"> /&gt;</span>
            </div>
            {/* <ul className='flex gap-4'>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ul> */}

            <div>
                <div className='bg-black text-white px-2 md:px-3 font-semibold py-1 md:py-2  rounded-lg cursor-pointer'>Download CV</div>
            </div>
        </div>
    </div>
  )
}

export default Header
