import SecondNav from "../../components/SecondNav";
import React from "react";
import Image from "next/image";
import flare from "../../../public/images/Ellipse.svg";
import display from "../../../public/images/display.png";
import display2 from "../../../public/images/display2.png";
import Thony from "../../../public/images/Thony.png";
import Ivie from "../../../public/images/Ivie.png";
import Emmanuel from "../../../public/images/Emmanuel.png";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import PageWrapper from "../../components/page-wrapper";
import Link from "next/link";

const page = () => {
  // const Items = ["  VIRTUAL HUMAN", "FASHION", " VIRTUAL ENTERTAIMENT"];
  const Items = [
    { title: "VIRTUAL HUMAN", link: "/VirtualHuman", id: 1 },
    { title: "VIRTUAL FASHION", link: "/VirtualFashion", id: 2 },
    { title: "VIRTUAL ENTERTAINMENT", link: "/Virtual_Entertainment", id: 3 },
  ];

  const values = [
    {
      id: 1,
      header: "CREATIVITY",
      Paragraph:
        "We are intentional about fostering an environment that encourages and celebrates creativity, empowering our team and clients to think outside the box and push boundaries in media-tech innovation.",
    },
    {
      id: 2,
      header: "COLLABORATION",
      Paragraph:
        "We cultivate a collaborative environment that encourages the exchange of ideas, expertise, and perspectives as fundamental to our success, both internally within the REDMUR team and externally with clients and partners.",
    },
    {
      id: 3,
      header: "COMMUNITY",
      Paragraph:
        "We embrace a sense of community, within REDMUR and by actively contributing to the broader creative and media-tech communities. Build relationships that extend beyond projects, fostering a network of support and inspiration.",
    },
    {
      id: 4,
      header: "CLIENT-FOCUS",
      Paragraph:
        "We prioritize the needs and goals of our clients, ensuring that every solution and service we provide is tailored to their unique requirements, leading to long-lasting and meaningful partnerships.",
    },
  ];
  const backgroundColor =
    "bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b]";
  return (
    <div className="bg-[#000] text-white">
      <SecondNav />
      <PageWrapper>
        <div className="mx-[10rem]">
          <div className="flex justify-center">
            <div className="relative w-[80%] h-[350px]">
              <Image src={flare} alt="eclipse" className="w-[629px]  mx-auto" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-[50px] font-bold leading-[80px] text-center mt-[100px]">
                  EMPOWERING CREATIVITY, CONNECTING COMMUNITIES.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center">
            <div className="relative w-[1172px] h-[1000px]">
              <Image
                src={display}
                alt="display"
                className="w-[800px] h-[1100px] mx-auto object-cover"
              />
              <div className="absolute inset-0 flex items-center mt-[9rem]">
                <div>
                  <h2 className="text-[26px] font-bold mb-20 tracking-wide">
                    STORY
                  </h2>
                  <p className=" leading-10 tracking-wider text-xl">
                    REDMUR is a media tech company committed to exploring new
                    horizons in digital engagement. Our journey began in 2022
                    with a vision to redefine storytelling through technology.
                    Today, we stand at the forefront of the industry, connecting
                    brands and their audiences in authentic ways. We hope to
                    continuously advance digital engagement and create
                    unforgettable brand experiences for our brands and
                    communities.
                  </p>
                  <div className="border border-[#555454] rounded-2xl px-20 py-[1.5rem] mt-20 ">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-20 mx-20">
          <div className="relative w-full">
            <div className="flex justify-center">
              <Image src={display2} alt="display" className="w-[500px] " />
              <div className="absolute inset-0 flex justify-center items-center ">
                <div className="text-center">
                  <h2 className="text-[26px] text-gray-300 font-bold tracking-widest mb-20">
                    Values
                  </h2>
                  <div className="flex justify-between gap-4 ">
                    {values.map((item) => (
                      <div
                        className="bg-gradient-to-r from-[#060614] via-[#02011b] to-[#03012b] py-3 px-3  w-[200px] h-[200px] py-auto rounded-md"
                        key={item.id}
                      >
                        <h2 className="text-[15px] text-gray-300">
                          {item.header}
                        </h2>
                        <p className="text-[10px] text-gray-400 leading-5 mt-3">
                          {item.Paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10 mx-20">
          <div className="text-center">
            <h2 className="font-bold text-[26px]">TEAM</h2>
            <div className="my-20 flex justify-center gap-4">
              <Image src={Thony} alt="CEO" />
              <Image src={Ivie} alt="co-founder" />
              <Image src={Emmanuel} alt="co-founder" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <ContactUs />
            <Footer />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
