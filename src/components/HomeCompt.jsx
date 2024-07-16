import React from "react";
import Nav from "./Nav";
import { Archivo_Black } from "next/font/google";

const HomeCompt = ({ backgroundImage, name, description, btn1, btn2 }) => {
  return (
    <div className="min-h-screen">
      <div
        className=" w-full"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "2",
        }}
      >
        <div className="flex justify-center h-[100vh] items-center text-center">
          <div className="mt-[10rem]">
            <h1 className="text-[4rem] mt-[30px] sm:text-[90px] font-extrabold  sm:mb-[8rem] tracking-widest">
              {name}
            </h1>
            <p className="w-full text-l sm:text-xl font-bold sm:tracking-widest ">
              {description}
            </p>
            <div className="flex flex-col mt-5 sm:flex-row justify-center gap-5  mx-auto">
              <button className="py-3 px-[3rem] text-[20px]  font-bold rounded-3xl bg-[#03040998] tracking-widest">
                {btn1}
              </button>
              <button className="py-3 px-[3rem] text-[20px] font-bold rounded-3xl bg-[#03040998] tracking-widest">
                {btn2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCompt;
