/* eslint-disable prettier/prettier */
import React from 'react';

const CookiesButton = () => {
  return (
    <div className="container mx-auto my-3">
      <div className=" flex flex-col justify-between rounded-xl border border-[#707070] w-[310px] h-[310px] mb-3">
        <div className="px-3 py-3 space-y-2">
          <h5 className="text-sm text-[#404040]">Hello there..</h5>
          <h3 className="text-xl font-bold text-[#404040]">
            We are the Cookies !
          </h3>
          <h5 className="text-sm text-[#404040]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Ab, accusamus aliquot averia beater connecter culpa
            dolores eum expedita, ipsam iure laboriosam nobis odit
            quos, sed sunt veritatis voluptas voluptate voluptatum!
          </h5>
        </div>
        <div className="w-full gap-4 h-10 flex items-center justify-center border-t border-[#707070] ">
          <button className="text-sm px-4 text-[#404040] h-full text-center border-r border-[#707070] ">
           No Thanks !
          </button>
          <button className="text-sm text-[#404040]">Off course</button>
        </div>
      </div>
      <button className="h-12 w-28 rounded-3xl bg-[#373737] text-center text-white">
        Cookies
      </button>
    </div>
  );
};

export default CookiesButton;
