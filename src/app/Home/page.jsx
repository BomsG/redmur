'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import moji from '../../../public/images/moji.png';
import OASIS from '../../../public/images/OASIS.png';
import About from '../../../public/images/About.png';
import Nav from '@/components/Nav';
import HomeCompt from '@/components/HomeCompt';
import imagine from '../../../public/images/imagine.png';
import Vfashion from '../../../public/images/Vfashion.png';
import VEnter from '../../../public/images/VEnter.png';
import ContactUs from '@/components/ContactUs';
import Review from '@/components/Review';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Header } from '@/components/ui/Nav';
// import Header from '@components/ui/Nav';

const page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const Items = ['  VIRTUAL HUMAN', 'FASHION', ' VIRTUAL ENTERTAIMENT'];

  const backgroundColor = 'bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b]';

  const handleScroll = () => {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    if (window.scrollY > heroHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className='text-white relative z-50 overflow-hidden'>
          <Header isScrolled={isScrolled} />
          <HomeCompt
            backgroundImage={moji}
            name='MOJIRADE'
            description="Nigeria's first virtual influencer and the beacon of digital
              fashion"
            btn1=' MEET MOJI'
            btn2='JOIN WAITLIST'
          />
          <Link href='/Campaign'>
            <HomeCompt
              backgroundImage={OASIS}
              name='THE OASIS'
              description="Nigeria's first virtual influencer and the beacon of digital
              fashion"
              btn1=' LEARN MORE'
              btn2='JOIN WAITLIST'
            />
          </Link>
          <Link href='/About' className='hero'>
            <HomeCompt
              backgroundImage={About}
              name='ABOUT US'
              description="Nigeria's first virtual influencer and the beacon of digital
              fashion"
              btn1=' OUR MISSION'
              btn2='JOIN WAITLIST'
            />
          </Link>
        </div>
        <div className='px-[6px] md:px-[8rem] py-20 bg-black text-white flex justify-center w-full'>
          <div>
            <div className='flex flex-col md:flex-row justify-between items-center sm:py-20 mb-20'>
              <div className='font-mono md:w-[46%]'>
                <h1 className='text-[18px] sm:text-[2.5rem] font-bold mb-10 text-center md:text-left '>
                  Imagination Knows no bounds.
                </h1>
                <p className='w-full text-[12px] text-lg leading-7 text-center md:text-left'>
                  With our virtual humans, we redefine brand engagement and storytelling where every
                  interaction sparks excitement, and where innovation is at its peak!
                </p>
                <p className='mt-3 font-bold font-sans'>
                  <span className='text-3xl'>M</span>ore
                </p>
              </div>
              <div className='md:w-[46%] mt-8 sm:mt-0'>
                <Image src={imagine} alt='image' />
              </div>
            </div>
            {/* <div className='border border-[#555454] rounded-lg px-2 py-[1.8rem] '>
              <ul className='flex justify-between items-center'>
                {Items.map((item, index) => (
                  <li
                    key={index}
                    className={`px-1 py-3 rounded-3xl ${index === 0 ? backgroundColor : ' '}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}
            <div className='flex flex-col md:flex-row justify-between items-center sm:py-20 my-20'>
              <div className='md:w-[46%] '>
                <Image src={Vfashion} alt='image' />
              </div>
              <div className='font-mono md:w-[46%] mt-8 sm:mt-0'>
                <h1 className='text-[18px] sm:text-[2.5rem] font-bold mb-10 text-center md:text-left'>
                  Imagination takes center stage.
                </h1>
                <p className='w-full text-[12px] text-lg leading-7 text-center md:text-left'>
                  We reimagine how fashion is created and experienced. Every design concept becomes
                  a reality in the digital realm breaking traditional boundaries!
                </p>
                <p className='mt-3 font-bold font-sans'>
                  <span className='text-3xl'>M</span>ore
                </p>
              </div>
            </div>
            {/* <div className='border border-[#555454] rounded-lg px-2 py-[1.8rem] '>
              <ul className='flex flex-col md:flex-row justify-between items-center'>
                {Items.map((item, index) => (
                  <li
                    key={index}
                    className={`px-1 py-3 rounded-3xl ${index === 1 ? backgroundColor : ' '}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}
            <div className='flex flex-col md:flex-row justify-between items-center sm:py-20 my-20'>
              <div className='font-mono md:w-[46%]'>
                <h1 className='text-[18px] sm:text-[2.5rem] font-bold mb-10 text-center md:text-left'>
                  Innovation meets imagination.
                </h1>
                <p className='w-full text-[12px] text-lg leading-7 text-center md:text-left'>
                  We build experiences that captivate audiences worldwide. We blend creativity and
                  technology to create unforgettable events that transport viewers to new
                  dimensions.!
                </p>
                <p className='mt-3 font-bold font-sans'>
                  <span className='text-3xl'>M</span>ore
                </p>
              </div>
              <Image src={VEnter} alt='image' />
            </div>
            {/* <div className='border border-[#555454] rounded-lg px-2 py-[1.8rem] '>
              <ul className='flex flex-col md:flex-row justify-between items-center'>
                {Items.map((item, index) => (
                  <li
                    key={index}
                    className={`px-1 py-3 rounded-3xl ${index === 2 ? backgroundColor : ' '}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div> */}
            <ContactUs />
            <Review />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
