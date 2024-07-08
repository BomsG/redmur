"use client";
import React, { useState } from "react";
import SecondNav from "../../components/SecondNav";
import Image from "next/image";
import games from "../../../public/images/games.png";
import films from "../../../public/images/films.png";
import events from "../../../public/images/events.png";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

function page() {
  return (
    <div className="text-white">
      <SecondNav />
      <div className="mx-[10rem] mt-[10rem]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <Image src={games} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={films} alt="Coming Soon" className="" />
          </div>
          <div>
            <Image src={events} alt="Coming Soon" className="" />
          </div>
        </div>
        <div className="mt-[12rem]">
          <ContactUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default page;
