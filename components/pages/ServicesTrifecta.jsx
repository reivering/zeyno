import React from 'react'
import { MdOutlinePalette, MdOutlineSettings, MdLightbulbOutline, MdArrowOutward } from "react-icons/md";
import { PiUserCircleLight } from "react-icons/pi";

const ServicesTrifecta = () => {
  return (
    <div id='services' className='w-full  min-h-screen font-inter px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-background py-8 sm:py-12 md:py-16'>

      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0'>
        <div className='w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start sm:items-end'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold' style={{ lineHeight: "0.9em" }}>DESIGN TRIFECTA</h1>
          <p className='font-extrabold text-sm sm:text-base md:text-lg lg:text-xl'></p>
        </div>
        <div className='flex items-center sm:items-end gap-2 sm:gap-3 mr-0 sm:mr-8 md:mr-12 lg:mr-16 cursor-pointer'>
          <h1 className='p-2 sm:p-3 bg-black rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[var(--color-base)] font-extralight px-4 sm:px-6 md:px-8'>know more</h1>
          <span className='p-2 sm:p-3 bg-black rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-base)]'><MdArrowOutward /></span>
        </div>
      </div>

      {/* Body - Cards */}
      <div className='flex flex-col lg:flex-row justify-center p-2 sm:p-4 mt-[2vh] sm:mt-[3vh] w-full h-auto lg:h-[70%] gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
        {/* User Experience Card */}
        <div className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-auto rounded-[4vh] sm:rounded-[5vh] md:rounded-[6vh] lg:rounded-[7vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 border border-[#d3e3f5]'>
          <span className="text-4xl mb-4 self-center text-[#111]"><PiUserCircleLight /></span>
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold text-center">User Experience</h2>
          <p className="text-[#555] text-black font-medium text-center mb-1">Research &amp; Strategy</p>
          <p className="text-[#555] text-black font-light leading-relaxed text-center mb-4">
            We start with understanding your users through research, creating user personas, and mapping customer journeys to ensure every interaction is meaningful and intuitive.
          </p>
          <div>
            <span className="block text-[#111] font-semibold mb-2">Our Process:</span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-5 text-[#222] text-black mb-4">
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>User Testing</li>
            </ul>
          </div>
          <hr className="my-2 border-[#fff]" />
          <div className="flex flex-col items-center mt-2">
            <span className="text-[#222] text-lg font-semibold">01</span>
            <span className="text-black text-xs tracking-widest">PHASE 1</span>
          </div>
        </div>

        {/* Visual Design Card */}
        <div className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-auto rounded-[4vh] sm:rounded-[5vh] md:rounded-[6vh] lg:rounded-[7vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 border border-[#e7d7ef]'>
          <span className="text-4xl mb-4 self-center text-[#111]"><MdOutlinePalette /></span>
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold text-center">Visual Design</h2>
          <p className="text-[#555] text-black font-medium text-center mb-1">Brand &amp; Interface</p>
          <p className="text-[#555] text-black font-light leading-relaxed text-center mb-4">
            Creating stunning visual identities and interfaces that reflect your brand values while ensuring accessibility and visual hierarchy guide users naturally.
          </p>
          <div>
            <span className="block text-[#111] font-semibold mb-2">Our Process:</span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-5 text-[#222] text-black mb-4">
              <li>Brand Identity</li>
              <li>UI Design</li>
              <li>Design Systems</li>
              <li>Visual Guidelines</li>
            </ul>
          </div>
          <hr className="my-2 border-[#fff]" />
          <div className="flex flex-col items-center mt-2">
            <span className="text-[#222] text-lg font-semibold">02</span>
            <span className="text-black text-xs tracking-widest">PHASE 2</span>
          </div>
        </div>

        {/* Development Card */}
        <div className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-auto rounded-[4vh] sm:rounded-[5vh] md:rounded-[6vh] lg:rounded-[7vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 border border-[#d7f5e7]'>
          <span className="text-4xl mb-4 self-center text-[#111]"><MdOutlineSettings /></span>
          <h2 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold text-center">Development</h2>
          <p className="text-[#555] text-black font-medium text-center mb-1">Technical Excellence</p>
          <p className="text-[#555] text-black font-light leading-relaxed text-center mb-4">
            Bringing designs to life with clean, maintainable code that's fast, secure, and scalable. We ensure pixel-perfect implementation across all devices.
          </p>
          <div>
            <span className="block text-[#111] font-semibold mb-2">Our Process:</span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 list-disc pl-5 text-[#222] text-black mb-4">
              <li>Frontend Development</li>
              <li>Backend Integration</li>
              <li>Performance Optimization</li>
              <li>Quality Assurance</li>
            </ul>
          </div>
          <hr className="my-2 border-[#fff]" />
          <div className="flex flex-col items-center mt-2">
            <span className="text-[#222] text-lg font-semibold">03</span>
            <span className="text-black text-xs tracking-widest">PHASE 3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesTrifecta
