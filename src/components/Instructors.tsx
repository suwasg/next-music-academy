'use client'
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from './ui/animated-tooltip'

const instructors=[
  {
    id: 1,
    name: "Emily Johnson",
    designation: "Vocal Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5w1cb-CtSk_E0KjY5u6pb_mP9F2IaAgbcA&s"
  },
  {
    id: 2,
    name: "Michael Brown",
    designation: "Guitar Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6InNDBUBmPvKrzP3zfnKcQsP0xKD54h9vJA&s"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    designation: "Piano Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL7VZrCB-KmQ8lpburT-mcYkQ2Tk3blBeM3w&s"
  },
  {
    id: 4,
    name: "David Lee",
    designation: "Drum Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0_koA2c_HOtb_pUNqc16WnkUNSAy0qUcVA&s"
  },
  {
    id: 5,
    name: "Olivia Smith",
    designation: "Violin Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1yfYnLXLjtlq49iYRFMYZqdpxWJb2bPFQmw&s"
  },
  {
    id: 6,
    name: "James White",
    designation: "Bass Guitar Instructor",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIR0T7CAsDupgkf8nBrAgmAh_EoxMZnk_0Yw&s"
  }
]


const Instructors = () => {
  return (
    <div className='h-[40rem]  relative overflow-hidden flex items-center justify-center'>
        <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8 '>Meet Our Instructors</h2>
          
          <p className='text-base md:text-lg text-white text-center mb-4'>Discover the talented professionals who will guide your musical journey.</p>
          
          <div className='flex flex-row items-center justify-center mb-10 w-full'>
            <AnimatedTooltip items={instructors}/>
        </div>
        </WavyBackground>
      
      </div>
  )
}

export default Instructors