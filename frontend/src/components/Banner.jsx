import React from 'react'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri'

const Banner = () => {
  return (
    <div className="flex flex-col text-sm font-medium">
      <div className="flex flex-col justify-center items-center px-16 py-2 w-full bg-gray-100">
        <div className="flex gap-6 max-w-full w-[290px]">
          <RiArrowLeftWideFill className='text-xl' />
          <div className="w-[211px]">
            Get 10% off on business sign up
          </div>
          <RiArrowRightWideFill className='text-xl' />
        </div>
      </div>
    </div>
  )
}

export default Banner