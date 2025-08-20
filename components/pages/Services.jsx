import React from 'react'
import { MdOutlinePalette, MdOutlineSettings, MdLightbulbOutline, MdArrowOutward } from "react-icons/md";

const Services = () => {
  return (
    <div id='services' className='w-full min-h-screen font-inter px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-background py-8 sm:py-12 md:py-16'>

        {/* Header */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end space-y-4 sm:space-y-0'>
            <div className='w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-start sm:items-end'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold' style={{lineHeight: "0.9em"}}>services</h1>
                <p className='font-extrabold text-sm sm:text-base md:text-lg lg:text-xl'>DESIGN TRIFECTA</p>
            </div>
            <div className='flex items-center sm:items-end gap-2 sm:gap-3 mr-0 sm:mr-8 md:mr-12 lg:mr-16 cursor-pointer'>
                <h1 className='p-2 sm:p-3 bg-black rounded-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[var(--color-base)] font-extralight px-4 sm:px-6 md:px-8'>know more</h1>
                <span className='p-2 sm:p-3 bg-black rounded-full text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[var(--color-base)]'><MdArrowOutward /></span>
            </div>
        </div>

        {/* Body - Cards */}
        <div className='flex flex-col lg:flex-row justify-center p-2 sm:p-4 mt-[2vh] sm:mt-[3vh] w-full h-auto lg:h-[70%] gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16'>
            {/* Design Card */}
            <div className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[55vh] rounded-[4vh] sm:rounded-[5vh] md:rounded-[6vh] lg:rounded-[7vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14'>
              <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4"><MdOutlinePalette /></span>
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl mt-[20%] sm:mt-[25%] md:mt-[30%] lg:mt-[44%] font-light mb-2">Design</h2>
              <p className="text-black text-sm sm:text-black md:text-lg font-light leading-relaxed">
                We craft clean, responsive, and fast-loading websites that blend modern UX/UI, accessibility, and branding—prioritizing thoughtful design that guides users and drives conversions without compromising usability.
              </p>
            </div>
            
            {/* Intelligence Card */}
            <div className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[55vh] rounded-[4vh] sm:rounded-[5vh] md:rounded-[6vh] lg:rounded-[7vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14'>
              <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4"><MdLightbulbOutline /></span>
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl mt-[20%] sm:mt-[25%] md:mt-[30%] lg:mt-[44%] font-light mb-2">Intelligence</h2>
              <p className="text-black text-sm sm:text-black md:text-lg font-light leading-relaxed">
                We embed AI into websites, CRMs, and operations to automate workflows, enhance decision-making, and uncover insights that drive smarter, more meaningful user experiences.
              </p>
            </div>
            
            {/* Integration Card */}
            <div className='w-full lg:w-[400px] xl:w-[450px] 2xl:w-[500px] h-[50vh] sm:h-[45vh] md:h-[40vh] lg:h-[55vh] rounded-[4vh] sm:rounded-[5vh] md:rounded-[6vh] lg:rounded-[7vh] bg-base flex flex-col p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14'>
              <span className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4"><MdOutlineSettings /></span>
              <h2 className="text-black text-2xl sm:text-3xl md:text-4xl mt-[20%] sm:mt-[25%] md:mt-[30%] lg:mt-[44%] font-light mb-2">Integration</h2>
              <p className="text-black text-sm sm:text-black md:text-lg font-light leading-relaxed">
                We build unified digital ecosystems—integrating websites, CRMs, APIs, and dashboards into seamless, scalable systems that eliminate silos, automate workflows, and align marketing, support, and sales.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Services
