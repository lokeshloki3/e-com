import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex flex-col pb-4 bg-white">
      <div className="flex flex-col justify-center items-end px-8 pt-3 w-full text-xs bg-white">
        <div className="flex gap-5 items-center">
          <p>Help</p>
          <p>Orders & Returns</p>
          <p>Hi, John</p>
        </div>
      </div>

      <div className="flex justify-between items-center px-8 mt-2 w-full">
        <p className="text-3xl font-bold">
          ECOMMERCE
        </p>
        <div className="flex gap-14 mt-4 font-semibold">
          <p>Categories</p>
          <p>Sale</p>
          <p>Clearance</p>
          <p>New stock</p>
          <p>Trending</p>
        </div>
        <div className="flex gap-8 mt-2.5">
          <CiSearch className='text-2xl' />
          <Link to="/cart">
            <CiShoppingCart className='text-2xl' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar