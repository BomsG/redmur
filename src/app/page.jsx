import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Home from '../../public/images/home.png';

const page = () => {
  return (
    <div className='text-white'>
      <Image
        src={Home}
        alt='success'
        quality={100}
        className='-z-10 object-cover  bg-gradient-to-r from-black  to-[#000000]'
        fill
      />
      <div className='flex justify-center h-[100vh] items-center text-center'>
        <div>
          <h1 className='text-[4.5rem] font-bold mb-20'>REDMUR</h1>
          <p className='my-10 text-sm'>
            Creating digital experiences that drive brand community engagement.
          </p>
          <div className='text-lg text-gray-400 font-bold border border-gray-700 font-mono tracking-widest rounded-3xl bg-black px-20 py-3'>
            <Link href='/home'>EXPLORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
