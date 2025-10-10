import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const Contact = () => {
  return (
    <div id="contact" className='min-h-screen font-inter w-full bg-black flex justify-center items-center px-4 sm:px-6 md:px-8'>
        <div className='relative bg-background w-full sm:w-[90vw] md:w-[84vw] h-[90vh] sm:h-[85vh] md:h-[80vh] rounded-[8vw] sm:rounded-[6vw] md:rounded-[4vw]'>
            {/* Paragraph */}
            <div className='m-4 sm:m-8 md:m-20 h-[40%] sm:h-[45%] md:h-[50%] w-full sm:w-[80%] md:w-[64%] flex items-center' >
                <h1 className='p-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight sm:leading-snug md:leading-normal' style={{lineHeight: "1.2em"}}>
                    To reach out with any project queries, you can write to us at{' '}
                    <span className='font-bold break-all sm:break-normal'>contactszeyno@gmail.com</span>{' '}
                    and we'll be in touch shortly.
                </h1>
            </div>

            {/* Lets talk section */}
            <div className='absolute bottom-[2vh] sm:bottom-[3vh] md:bottom-[5vh] w-full flex justify-center sm:justify-start sm:pl-8 md:pl-20 cursor-pointer'>
                <a
                  href="https://tally.so/r/3NjExl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open contact form on Tally"
                  className='mb-2 sm:mb-4 flex flex-col sm:flex-row justify-between items-center sm:items-start w-[95%] sm:w-[90%] md:w-[95%] cursor-pointer'
                >
                    <div className='text-center sm:text-left mb-4 sm:mb-0'>
                        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light pb-2 sm:pb-3'>
                            Got a{' '}
                            <span className='font-light text-[var(--color-base)]'>project</span>{' '}
                            in mind?
                        </p>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-black transition-colors duration-450 hover:text-[#333] font-bold leading-tight sm:leading-snug'>
                            LET'S TALK
                        </h1>
                    </div>
                    <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-[var(--color-base)] transition-colors duration-450 hover:text-[#fa8] sm:pt-6 md:pt-12'>
                        <MdArrowOutward />
                    </span>
                </a>
                <div className='absolute bottom-1 sm:bottom-2 border-2 border-white h-[6%] sm:h-[7%] md:h-[8%] w-[85%] sm:w-[88%] md:w-[90%] bg-black rounded-b-[8vw] sm:rounded-b-[6vw] md:rounded-b-[4vw]' />
            </div>
        </div>
    </div>
  )
}

export default Contact