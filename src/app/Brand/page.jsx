"use client";
import SecondNav from "../../components/SecondNav";
import React from "react";
import Image from "next/image";
import video from "../../../public/images/Video.png";
import Review from "../../components/Review";
import Footer from "../../components/Footer";
import partners from "../../../public/images/Partners.png";
import PageWrapper from "../../components/page-wrapper";
import Partners from "../../components/Partners";

const Page = () => {
  const item = [
    {
      header: "CREATIVE PRODUCTION",
      paragraph:
        "Full CG production, including editorials, 3D visualization and animation, tailored to capture brand essence, resonate with audiences and exceed quality standards. ",
    },
    {
      header: "VIRTUAL BRAND ACTIVATION",
      paragraph:
        "Unique brand experiences, virtual influencers, and immersive campaignsthat amplify brands presence, drive exceptional brand awareness and increase engagement.",
    },
    {
      header: "CREATIVE TECH SOLUTION",
      paragraph:
        "Bespoke web experiences, NFTs, Integrated blockchain solutions, and growing web3 community built to propel brands into future of digital engagement.",
    },
  ];
  return (
    <div className="bg-black h-full text-white">
      <SecondNav />
      <PageWrapper>
        <div className=" mx-[10rem] pb-20">
          <h2 className="text-center font-bold tracking-wider my-[7rem]">
            TRANSFORMING IDEAS INTO ENGAGING EXPERIENCES
          </h2>

          <Image src={video} alt="video" className="h-[500px]" />
          {/* <video width={"100%"} height={"585px"} /> */}

          {/* <div className="grid grid-cols-3 grid-flow-col gap-4  ">
            {item.map((item, index) => (
              <div>
                <h2 className="bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] px-4 py-3 rounded-3xl text-center mb-5">
                  {item.header}
                </h2>
                <p className="bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] px-4 py-10 rounded-3xl text-[12px] leading-10">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-flow-co gap-4 my-20">
            {item.map((item, index) => (
              <div key={index} className="">
                <h3 className="text-sm text-center tracking-widest font-bold py-5 bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] border border-[#7f7f7f7c] px-10  rounded-3xl mb-3">
                  {item.header}
                </h3>
                <p className="text-[12px] py-10 leading-7 tracking-wide bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] px-10 rounded-2xl border border-[#7f7f7f7c] ">
                  {item.paragraph}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-20 border-y-2 border-[#555454] py-10 text-center">
            <h2 className="text-xl mb-5 tracking-wider">
              READY TO ELEVATE YOUR BRAND WITH <br />
              OUR NEXT-GEN DIGITAL EXPERIENCES?
            </h2>
            <button className="border border-[#555454] px-3 py-3  rounded-3xl text-sm">
              GET IN TOUCH
            </button>
          </div>

          <div className="mt-[30rem] ">
            <Footer />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default Page;
