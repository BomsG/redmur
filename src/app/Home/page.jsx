"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import moji from "../../../public/images/moji.png";
import OASIS from "../../../public/images/OASIS.png";
import About from "../../../public/images/About.png";
import HomeCompt from "../../components/HomeCompt";
import imagine from "../../../public/images/imagine.png";
import Vfashion from "../../../public/images/Vfashion.png";
import VEnter from "../../../public/images/VEnter.png";
import ContactUs from "../../components/ContactUs";
import Review from "../../components/Review";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Header } from "../../components/ui/Nav";
import { motion } from "framer-motion";
import PageWrapper from "../../components/page-wrapper";

// import Header from '@components/ui/Nav';

const Page = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const Items = [
    { title: "VIRTUAL HUMAN", link: "/VirtualHuman", id: 1 },
    { title: "VIRTUAL FASHION", link: "/VirtualFashion", id: 2 },
    { title: "VIRTUAL ENTERTAINMENT", link: "/Virtual_Entertainment", id: 3 },
  ];

  const backgroundColor = "bg-gradient-to-r from-[#050816] to-[#18123D]";

  const handleScroll = () => {
    const heroHeight = document.querySelector(".hero").offsetHeight;
    if (window.scrollY > heroHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <PageWrapper>
          <div className="text-white relative z-50 overflow-hidden">
            <Header isScrolled={isScrolled} />
            <Link href="/Mojirade">
              <HomeCompt
                backgroundImage={moji}
                name="MOJIRADE"
                description="Nigeria's first virtual influencer and the beacon of digital
              fashion"
                btn1=" MEET MOJI"
                btn2="JOIN WAITLIST"
              />
            </Link>
            <Link href="/Campaign">
              <HomeCompt
                backgroundImage={OASIS}
                name="THE OASIS"
                description="Nigeria's first virtual influencer and the beacon of digital
              fashion"
                btn1=" LEARN MORE"
                btn2="JOIN WAITLIST"
              />
            </Link>
            <Link href="/About" className="hero">
              <HomeCompt
                backgroundImage={About}
                name="ABOUT US"
                description="Nigeria's first virtual influencer and the beacon of digital
              fashion"
                btn1=" OUR MISSION"
                btn2="JOIN WAITLIST"
              />
            </Link>
          </div>
          <div className="px-[6px] md:px-[8rem] py-20 bg-black text-white flex justify-center w-full">
            <div>
              <div className="flex flex-col md:flex-row justify-center gap-5  sm:py-20 mb-20">
                <div className="w-[35%] ">
                  <h1 className="text-[40px] sm:text-[2.5rem] font-bold mb-10 text-center md:text-left ">
                    Imagination Knows no bounds.
                  </h1>
                  <p className="text-[12px] sm:text-[14px] leading-10 tracking-widest text-center md:text-left  font-bold">
                    With our virtual humans, we redefine brand engagement and
                    storytelling where every interaction sparks excitement, and
                    where innovation is at its peak!
                  </p>
                  <Link href="VirtualHuman">
                    <p className="mt-3 font-bold ">
                      <span className="text-3xl">M</span>ore
                    </p>
                  </Link>
                </div>
                <div className="md:w-[46%] ">
                  <Image src={imagine} alt="image" className="mt-10" />
                </div>
              </div>
              <div className="border border-[#555454] rounded-xl px-20 py-[1.8rem]">
                <ul className="flex justify-between items-center">
                  {Items.map((item, index) => (
                    <li
                      key={item.id}
                      className={`px-10 py-3 rounded-3xl text-[15px] ${
                        index === 0 ? backgroundColor : ""
                      }`}
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-5  sm:py-20 mb-20">
                <div className="md:w-[46%] ">
                  <Image src={Vfashion} alt="image" className="mt-10" />
                </div>

                <div className="w-[35%] mt-8 sm:mt-0">
                  <h1 className="text-[40px] sm:text-[2.5rem] font-bold mb-10 text-center md:text-left ">
                    Imagination takes center stage.
                  </h1>
                  <p className="text-[12px] sm:text-[14px] leading-10 tracking-widest text-center md:text-left  font-bold">
                    We reimagine how fashion is created and experienced. Every
                    design concept becomes a reality in the digital realm
                    breaking traditional boundaries!
                  </p>
                  <Link href="VirtualFashion">
                    <p className="mt-3 font-bold ">
                      <span className="text-3xl">M</span>ore
                    </p>
                  </Link>
                </div>
              </div>
              <div className="border border-[#555454] rounded-xl px-20 py-[1.8rem] ">
                <ul className="flex justify-between items-center">
                  {Items.map((item, index) => (
                    <li
                      key={index}
                      className={`px-10 py-3 rounded-3xl text-[15px] ${
                        index === 1 ? backgroundColor : ""
                      }`}
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-5  sm:py-20 mb-20">
                <div className=" md:w-[35%]">
                  <h1 className="text-[40px] sm:text-[2.5rem] font-bold mb-10 text-center md:text-left ">
                    Innovation meets imagination.
                  </h1>
                  <p className="text-[12px] sm:text-[14px] leading-10 tracking-widest text-center md:text-left  font-bold">
                    We build experiences that captivate audiences worldwide. We
                    blend creativity and technology to create unforgettable
                    events that transport viewers to new dimensions.!
                  </p>
                  <Link href="Virtual_Entertainment">
                    <p className="mt-3 font-bold ">
                      <span className="text-3xl">M</span>ore
                    </p>
                  </Link>
                </div>
                <div className="md:w-[46%] ">
                  <Image src={VEnter} alt="image" className="mt-10" />
                </div>
              </div>
              <div className="border border-[#555454] rounded-xl px-20 py-[1.8rem] ">
                <ul className="flex justify-between items-center">
                  {Items.map((item, index) => (
                    <li
                      key={index}
                      className={`px-10 py-3 rounded-3xl text-[15px] ${
                        index === 2 ? backgroundColor : ""
                      }`}
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <ContactUs />
              <Review />
              <Footer />
            </div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default Page;
