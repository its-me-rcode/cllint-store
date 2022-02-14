import React from 'react';

import Image from 'next/image';

import AndroidIcon from '../../assets/svg/android-icon.svg';
import AppleLogo from '../../assets/svg/apple-logo.svg';
import FBIcon from '../../assets/svg/fb-icon.svg';
import GithubIcon from '../../assets/svg/github-icon.svg';
import Google from '../../assets/svg/google-icon.svg';
import LinkedinIcon from '../../assets/svg/linkedin-icon.svg';
import TwitterIcon from '../../assets/svg/twiter-icon.svg';

const Footer = () => {
  return (
    <div className="container mx-auto flex items-center justify-around  w-full h-[60px]  ">
      <h1 className="text-5xl font-bold ">Cllct</h1>
      {/* eslint-disable-next-line prettier/prettier */}
      <h5 className="text-sm font-light">
        © 2021 Cllct. All rights reserved.
      </h5>
      <div className="flex items-center gap-3">
        <h6 className="text-base font-light "> About</h6>
        <h6 className="text-base font-light "> Help</h6>
        <h6 className="text-base font-light "> Terms of Service</h6>
        <h6 className="text-base font-light "> Privacy Policy</h6>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-11 w-32 rounded-3xl bg-[#6317A7] text-white flex items-center justify-center gap-2 ">
          <Image src={AndroidIcon} alt="" width="20" height="30" />
          <div className="">
            <h5 className="text-[7px]  ">Available on the</h5>
            <h3 className="text-sm ">Google Play</h3>
          </div>
        </div>
        <div className="h-11 w-32 rounded-3xl bg-[#ED4E94] text-white flex items-center justify-center gap-2 ">
          <Image src={AppleLogo} alt="" width="20" height="30" />
          <div className="">
            <h5 className="text-[7px]  ">Available on the</h5>
            <h3 className="text-sm ">App Store</h3>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image src={FBIcon} alt="" width="40" height="40" />
        <Image src={TwitterIcon} alt="" width="40" height="40" />
        <Image src={LinkedinIcon} alt="" width="40" height="40" />
        <Image src={Google} alt="" width="40" height="40" />
        <Image src={GithubIcon} alt="" width="40" height="40" />
      </div>
    </div>
  );
};

export default Footer;
