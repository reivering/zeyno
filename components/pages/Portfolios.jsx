import React from 'react'
import { MdOutlinePalette, MdOutlineSettings } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";
import Image from 'next/image';

const portfolios = [
  {
    image: "/portfolio/abel.png",
    name: "Abel Shine Varghese",
    role: "Founder | Lead Dev",
    link: "https://abelsv-portfolio.vercel.app/"
  },
  {
    image: "/portfolio/cyril.png",
    name: "Cyril Clement",
    role: "Founder | Lead Marketer & Co-Dev",
    link: "https://cyril.lat/"
  },
  {
    image: "/portfolio/allen.png",
    name: "Allen George Thomas",
    role: "Founder | Lead Designer",
    link: "https://www.virtusco.in/founders/allen-george-thomas"
  },
];

const Portfolios = () => {
  return (
    <div id='portfolios' className='w-full min-h-screen  font-inter px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-background py-8 sm:py-12 md:py-16'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row pt-20 items-center justify-center w-full h-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        <div className='w-full  sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[60%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col'>
          <h1 className='text-4xl text-center sm:text-8xl md:text-6xl lg:text-8xl xl:text-8xl 2xl:text-8xl font-bold' style={{ lineHeight: "0.9em" }}>MEET THE TEAM</h1>
          <p className='font-extrabold text-sm sm:text-base md:text-lg lg:text-xl'></p>
        </div>
      </div>
      {/* Cards */}
      <div className='flex flex-col lg:flex-row justify-center p-4 sm:p-4 mt-[2vh] sm:mt-[3vh] w-full h-auto gap-10 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
        {portfolios.map((item, idx) => (
          <div
            key={idx}
            className={` `}
          >
            <div className='bg-base p-[2.5vh] rounded-[0.5vh]'> <a href={`${item.link} `} target="_blank">
              <Image src={item.image} alt={item.name} width={1200} height={1000} className='w-full h-auto' /></a>
            </div>
            <h2 className='text-2xl text-center mt-10 sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2'>{item.name}</h2>
            <p className='text-lg text-center sm:text-xl md:text-2xl lg:text-2xl font-medium mb-4 sm:mb-6 md:mb-8 lg:mb-10'>{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolios;