import React from 'react'
import { MdOutlinePalette, MdOutlineSettings } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";

const portfolios = [
  {
    icon: <PiUserCircleLight className="text-4xl mb-4 self-center text-[#111]" />,
    title: "Brand Identity",
    subtitle: "Logo & Visuals",
    description: "Distinctive logos and brand visuals that capture your essence and set you apart in your industry.",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
    phase: "01",
    phaseLabel: "IDENTITY",
  },
  {
    icon: <MdOutlinePalette className="text-4xl mb-4 self-center text-[#111]" />,
    title: "Web Design",
    subtitle: "UI/UX & Layouts",
    description: "Modern, user-centric website designs focused on clarity, usability, and visual impact.",
    features: ["Wireframes", "UI Design", "Responsive Layouts", "Interaction Design"],
    phase: "02",
  },
  {
    icon: <MdOutlineSettings className="text-4xl mb-4 self-center text-[#111]" />,
    title: "Development",
    subtitle: "Build & Launch",
    description: "Robust, scalable web development that brings your designs to life and ensures smooth performance.",
    features: ["Frontend Dev", "Backend Dev", "CMS Integration", "SEO Setup"],
    phase: "03",
    phaseLabel: "LAUNCH",
  },
];

const Portfolios = () => {
  return (
    <div id='portfolios' className='w-full min-h-screen  font-inter px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-background py-8 sm:py-12 md:py-16'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row pt-20 items-center justify-center w-full h-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
        <div className='w-full  sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[60%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col'>
          <h1 className='text-3xl text-center sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold' style={{ lineHeight: "0.9em" }}>MEET THE TEAM</h1>
          <p className='font-extrabold text-sm sm:text-base md:text-lg lg:text-xl'></p>
        </div>
      </div>
      {/* Cards */}
      <div className='flex flex-col lg:flex-row justify-center p-2 sm:p-4 mt-[2vh] sm:mt-[3vh] w-full h-auto gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
        {portfolios.map((item, idx) => (
          <div
            key={idx}
            className={`w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-auto rounded-[1vh] sm:rounded-[1vh] md:rounded-[1vh] lg:rounded-[2vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 `}
          >
            {item.icon}
            <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold text-center">{item.title}</h2>
            <p className="text-[#555] text-base font-medium text-center mb-1">{item.subtitle}</p>
            <p className="text-[#555] text-base font-light leading-relaxed text-center mb-4">{item.description}</p>
            <div>
              <span className="block text-[#111] font-semibold mb-2">Key Features:</span>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-5 text-[#222] text-base mb-4">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <hr className="my-2 border-[#eee]" />
            <div className="flex flex-col items-center mt-2">
              <span className="text-[#222] text-lg font-semibold">{item.phase}</span>
              <span className="text-[#888] text-xs tracking-widest">{item.phaseLabel}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolios;