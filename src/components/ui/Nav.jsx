'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { RiCloseFill, RiMenu2Fill } from 'react-icons/ri';
// import { useAuthContext } from '@/lib/contexts/auth';
import redmur from '../../../public/images/redmur.png';
import Image from 'next/image';

export const Header = ({ isScrolled }) => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState({ hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: String(now.getHours()).padStart(2, '0'),
        minutes: String(now.getMinutes()).padStart(2, '0'),
        seconds: String(now.getSeconds()).padStart(2, '0'),
      });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  // const [time, setTime] = useState(new Date());

  // const { user, handleLogOut } = useAuthContext();
  const user = false;

  const handleLogout = () => {
    console.log('logged out');
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const hours = String(time.getHours()).padStart(2, '0');
  // const minutes = String(time.getMinutes()).padStart(2, '0');
  // const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div className='fixed w-full'>
      <div className='block'>
        <div
          className={`flex justify-between items-center  text-white font-semibold py-5 px-2 md:px-5 ${
            isScrolled ? 'backdrop-blur-sm bg-white/300' : 'bg-transparent'
          }`}
        >
          <Link href='/' className='flex md:ms-2 md:me-24 md:px-4 w-[100px]'>
            <div className='font-bold flex items-center gap-1'>
              <Image src={redmur} width={100} height={50} alt='logo' />
            </div>
          </Link>

          <ul className='hidden sm:flex items-center gap-5 text-[14px]'>
            <li className=''>campaigns</li>

            <li className=''>
              <Link href='/brand'>brands</Link>
            </li>

            <li className=''>
              <Link href='/about'>about us </Link>
            </li>

            <li className=''>media</li>
          </ul>

          <ul className='hidden sm:flex items-center gap-3 text-sm '>
            <li className='w-[96px] '>
              {/* NGN {hours}:{minutes}:{seconds} */}
              NGN {time.hours}:{time.minutes}:{time.seconds}
            </li>
          </ul>
          <button
            className='sm:hidde flex h-8 w-8 justify-center items-center  border-gray-300 rounded-md p-1 cursor-pointer'
            onClick={() => setOpen(!open)}
          >
            <RiMenu2Fill />
          </button>
        </div>
        {open && (
          <div className='fixed sm:hidde z-50 bg-white w-full h-full text-black top-0'>
            <div className='flex flex-col p-8'>
              <button
                className='h-8 w-8 flex justify-center items-center [&_svg]:text-2xl self-end mb-8'
                onClick={() => setOpen(false)}
              >
                <RiCloseFill />
              </button>
              <ul className='flex flex-col items-center gap-3 text-sm text-black'>
                <li className=''>campaigns</li>

                <li className=''>
                  <Link href='/brand'>brands</Link>
                </li>

                <li className=''>
                  <Link href='/about'>about us </Link>
                </li>

                <li className=''>media</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
