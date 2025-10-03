import React from 'react'

import Headphone1 from "../../assets/headphone.png"
import Headphone2 from "../../assets/headphone2.png"
import Headphone3 from "../../assets/headphone3.png"
import { FaWhatsapp } from "react-icons/fa";
import { delay, easeInOut, scale } from 'framer-motion';

const fadeUp=(delay)=>{
  return {
    hidden:{
      opacity:0,
      y:100,
      scale:0.5,
    },
    show:{
opacity:1,
y:0,
scale:1,
transition:{
  duration:0.5,
  delay:delay,
  ease:easeInOut,
},
    },
    exit:{
opacity:0,
y:50,
scale:0.5,
transition:{
  duration:0.2,
  ease:easeInOut
}
    }
  }
}
const headphonedata = [
  {
    id: 1,
    image: Headphone1,
    title: "Headphones Wireless",
    subtitle:
      "Immerse yourself in pure sound with headphones designed to deliver exceptional clarity and deep, rich bass. Experience unmatched comfort and stylish design, perfect for all-day wear and an elevated listening experience.",
    price: "$100",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: Headphone2,
    title: "Headphones Wireless",
    subtitle:
      "Immerse yourself in pure sound with headphones designed to deliver exceptional clarity and deep, rich bass. Experience unmatched comfort and stylish design, perfect for all-day wear and an elevated listening experience.",
    price: "$100",
    modal: "Lime-Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: Headphone3,
    title: "Headphones Wireless",
    subtitle:
      "Immerse yourself in pure sound with headphones designed to deliver exceptional clarity and deep, rich bass. Experience unmatched comfort and stylish design, perfect for all-day wear and an elevated listening experience.",
    price: "$100",
    modal: "Blue",
    bgColor: "#5d818c",
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphonedata[0]);
  // Define the handler with a correct name
  const handleActiveData = (item) => {
    setActiveData(item);
  };

  return (
    <section className="bg-black text-white px-4 md:px-10 lg:px-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:gap-16 gap-8">
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
          <div className="space-y-5 text-center md:text-left">
            
            <h1 className="text-3xl lg:text-6xl font-bold font-sans">
              {activeData.title}
            </h1>
            <p className="text-sm leading-loose text-white/80">{activeData.subtitle}</p>
            <button
              style={{ backgroundColor: activeData.bgColor }}
              className="px-4 py-2 inline-block font-normal rounded-sm"
            >
              Buy and Listen
            </button>

            <div className="flex items-center justify-center md:justify-start gap-6 mt-24">
              <div className="w-16 h-[2px] bg-gradient-to-r from-yellow-400 to-red-500"></div>
              <p className="uppercase text-lg tracking-widest font-semibold text-gray-100 animate-fade-in">
                Top Headphones for You
              </p>
            </div>

            <div className="grid grid-cols-3 gap-10">
              {headphonedata.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleActiveData(item)}  // <== Fixed typo here
                  className="grid grid-cols-2 place-items-center cursor-pointer"
                >
                  <img src={item.image} alt="" className="w-[150px] md:w-[200px]" />
                  <div className="space-y-2">
                    <p className="text-base font-bold">{item.price}</p>
                    <p className="text-xs font-normal">{item.modal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-center">
          <img
            src={activeData.image}
            alt=""
            className="w-72 md:w-96 xl:w-[550px]"
          />
        </div>
        <div>
          <a href="">
            <FaWhatsapp className='' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
