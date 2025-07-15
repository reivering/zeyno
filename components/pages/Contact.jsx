import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Contact = () => {
  return (
    <div id="contact" className='h-screen font-inter w-full bg-black flex justify-center items-center'>
        <div className='relative bg-background w-[84vw] h-[80vh] rounded-[4vw]'>
            {/* Paragraph */}
            <div className='m-20  h-[50%] w-[64%] flex items-center' >
                <h1 className='p-2 text-5xl font-light' style={{lineHeight: "1.2em"}}>To reach out with any project queries, you can write to us at <span className='font-bold'>contactzeyno@gmail.com</span> and
                    we'll be in touch shortly.
                </h1>
            </div>

            {/* Lets talk section */}
            <div className='absolute bottom-[5vh] w-full flex justify pl-20'>
                <div className='mb-4 flex justify-between w-[95%]'>
                    <div className=''>
                        <p className='text-4xl font-light pb-3'>Got a <span className='text-4xl font-light text-[var(--color-base)]'>project</span> in mind?</p>
                        <h1 className='text-8xl text-black font-bold'>LET'S TALK</h1>
                    </div>
                    <span className='text-8xl text-[var(--color-base)] pt-12'><MdArrowOutward /></span>
                </div>
                <div className='absolute bottom-2 border-2 border-white h-[8%] w-[90%] bg-black' />
            </div>
        </div>
    </div>
  )
}

export default Contact