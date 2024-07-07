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
          backgroundColor: "#1E1E1E",
          backgroundRepeat: "no-repeat",
          aspectRatio: "2",
        }}
      >
        <div className="flex justify-center h-[100vh] items-center text-center">
          <div className="mt-[10rem]">
            <h1 className="text-[4rem] sm:text-[5.5rem] font-bold mb-[2px] sm:mb-[8rem] tracking-widest">
              {name}
            </h1>
            <p className="w-full my-10 text-l sm:text-xl  sm:tracking-widest ">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5 w-[70%] mx-auto">
              <button className="py-3 px-[1rem] sm:px-[3rem] text-sm  rounded-3xl bg-[#03040998] tracking-widest">
                {btn1}
              </button>
              <button className="py-3 px-[3rem] text-sm rounded-3xl bg-[#03040998] tracking-widest">
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
