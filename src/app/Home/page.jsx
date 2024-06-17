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
        <div className='text-white relative z-50'>
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
          <Link href='/About'>
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
        <div className='hero px-[8rem] py-20 bg-black text-white flex justify-center w-full'>
          <div>
            <div className='flex justify-between items-center py-20'>
              <div className='font-mono'>
                <h1 className='text-[2.5rem] font-bold mb-10 '>Imagination Knows no bounds.</h1>
                <p className='text-lg leading-7'>
                  With our virtual humans, we redefine brand engagement and storytelling where every
                  interaction sparks excitement, and where innovation is at its peak!
                </p>
                <p className='mt-3 font-bold font-sans'>
                  <span className='text-3xl'>M</span>ore
                </p>
              </div>
              <Image src={imagine} alt='image' />
            </div>
            <div className='border border-[#555454] rounded-lg px-20 py-[1.8rem] '>
              <ul className='flex justify-between items-center'>
                {Items.map((item, index) => (
                  <li
                    key={index}
                    className={`px-10 py-3 rounded-3xl ${index === 0 ? backgroundColor : ' '}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-between items-center gap-20 py-20'>
              <Image src={Vfashion} alt='image' />
              <div className='font-mono'>
                <h1 className='text-[2.5rem] font-bold mb-10 '>Imagination takes center stage.</h1>
                <p className='text-lg leading-7'>
                  We reimagine how fashion is created and experienced. Every design concept becomes
                  a reality in the digital realm breaking traditional boundaries!
                </p>
                <p className='mt-3 font-bold font-sans'>
                  <span className='text-3xl'>M</span>ore
                </p>
              </div>
            </div>
            <div className='border border-[#555454] rounded-lg px-20 py-[1.8rem] '>
              <ul className='flex justify-between items-center'>
                {Items.map((item, index) => (
                  <li
                    key={index}
                    className={`px-10 py-3 rounded-3xl ${index === 1 ? backgroundColor : ' '}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-between items-center gap-20 py-20 '>
              <div className='font-mono'>
                <h1 className='text-[2.5rem] font-bold mb-10 '>Innovation meets imagination.</h1>
                <p className='text-lg leading-7'>
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
            <div className='border border-[#555454] rounded-lg px-20 py-[1.8rem] '>
              <ul className='flex justify-between items-center'>
                {Items.map((item, index) => (
                  <li
                    key={index}
                    className={`px-10 py-3 rounded-3xl ${index === 2 ? backgroundColor : ' '}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
