import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full h-screen font-inter px-20 bg-background '>

        {/* Header */}
        <div className='flex flex-row justify-between'>
            <div className='w-[30%] p-10  flex flex-col items-end b'>
                <h1 className='text-base  font-semibold lg:text-8xl sm:text-4xl' style={{lineHeight: "0.9em"}}>services</h1>
                <p className='font-extrabold lg:text-xl'>DESIGN TRIFECTA</p>
            </div>
            <div className='flex items-end gap-3 mr-16 w-64 cursor-pointer '>
                <h1 className='p-4 bg-black rounded-full text-[27px] font-extralight px-6   text-base'>know more</h1>
                <span className='p-4 bg-black rounded-full text-xl font-normal text-base'>↗️</span>
            </div>

        </div>
            {/* Body  */}

        <div className='flex justify-center p-4  mt-[3vh] w-full h-[70%] gap-16'>
            {/* Design Card */}
            <div className='w-[500px] h-[55vh] rounded-[7vh] bg-base flex flex-col p-14'>
              <span className="text-3xl mb-4">🎨</span>
              <h2 className="text-black text-4xl mt-[48%] font-light mb-2">Design</h2>
              <p className="text-black text-base text-lg font-light">
                We craft clean, responsive, and fast-loading websites that blend modern UX/UI, accessibility, and branding—prioritizing thoughtful design that guides users and drives conversions without compromising usability.
              </p>
            </div>
            {/* Intelligence Card */}
            <div className='w-[500px] h-[55vh] rounded-[7vh] bg-base flex flex-col p-14'>
              <span className="text-3xl mb-4">💡</span>
              <h2 className="text-black text-4xl mt-[48%] font-light mb-2">Intelligence</h2>
              <p className="text-black text-base text-lg font-light">
                We embed AI into websites, CRMs, and operations to automate workflows, enhance decision-making, and uncover insights that drive smarter, more meaningful user experiences.
              </p>
            </div>
            {/* Integration Card */}
            <div className='w-[500px] h-[55vh] rounded-[7vh] bg-base flex flex-col p-14'>
              <span className="text-3xl mb-4">⚙️</span>
              <h2 className="text-black text-4xl mt-[48%] font-light mb-2">Integration</h2>
              <p className="text-black text-base text-lg font-light">
                We build unified digital ecosystems—integrating websites, CRMs, APIs, and dashboards into seamless, scalable systems that eliminate silos, automate workflows, and align marketing, support, and sales.
              </p>
            </div>
        </div>
    </div>
  )
}

export default Services
