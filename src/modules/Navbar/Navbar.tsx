import React from 'react';

import Image from 'next/image';

import BoxIcon from '../../assets/svg/box-icon.svg';
import BrushIcon from '../../assets/svg/brush-icon.svg';
import IconLogo from '../../assets/svg/logo-icon.svg';
import SearchIcon from '../../assets/svg/search-icon.svg';
import StringIcon from '../../assets/svg/string-icon.svg';
import UserIcon from '../../assets/svg/user-icon.svg';

const Navbar = () => {
  return (
    <div className="container flex flex-col gap-2 mx-auto ">
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <Image src={IconLogo} alt="" width="78" height="48" />
          <div className="flex items-center ml-10 gap-9">
            <h5 className="text-lg font-semibold ">Collections</h5>
            <h5 className="text-lg font-semibold ">Projects</h5>
          </div>
        </div>
        <div className="flex items-center gap-7 ">
          <div className=" relative flex items-center justify-center fill-white bg-[#6317A7] w-11 h-11 rounded-full">
            <Image src={BrushIcon} alt="" width="20" height="20" />
            <h3 className="absolute w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-3 ring-white ring-1 ">
              T
            </h3>
          </div>
          <div className="relative flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11">
            <Image src={StringIcon} alt="" width="78" height="48" />
            <h3 className="absolute w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-3 ring-white ring-1 ">
              S
            </h3>
          </div>
          <div className="relative flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11">
            <Image src={BoxIcon} alt="" width="78" height="48" />
            <h3 className="absolute w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-3 ring-white ring-1 ">
              A
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className=" flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11">
              <Image src={UserIcon} alt="" />
            </div>
            {/* eslint-disable-next-line prettier/prettier */}
            <h3 className="text-[#5E5C5C] text-sm font-semibold ">
              John Doe
            </h3>
          </div>
          <div className="relative ">
            <button className="text-xl text-center pb-1 w-24 h-11 font-semibold text-black rounded-3xl bg-[#FBBB0B] ">
              create
            </button>
            <h3 className="absolute w-6 h-6 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-3 ring-white ring-1">
              +
            </h3>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full  h-11 rounded-3xl border-[#9B9B9B] border ">
        <div className="flex items-center w-full gap-3 ">
          <div className="flex items-center ml-4">
            <Image src={SearchIcon} alt="" width="20" height="20" />
          </div>
          <input
            type="text"
            placeholder="Web..."
            className="w-3/12 h-full border-none outline-none "
          />
        </div>
        <div className="flex items-center gap-3 h-full border-l border-[#9B9B9B] mr-3  ">
          <h3 className="h-6  mx-2 pt-0.5 text-xs font-bold text w-14  bg-[#ECEFF4] rounded-3xl text-center ">
            All
          </h3>
          <h3 className="text-xs font-bold text">Collections</h3>
          <h3 className="text-xs font-bold text">Project</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
