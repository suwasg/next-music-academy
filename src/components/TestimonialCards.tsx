'use client'
import React from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials=[
    {
      "name": "Emily Johnson",
      "title": "Aspiring Singer",
      "quote": "The vocal training I received here transformed my voice. The instructors are incredibly knowledgeable and supportive."
    },
    {
      "name": "Michael Brown",
      "title": "Guitar Enthusiast",
      "quote": "I've learned more about guitar in a few months here than I did in years of self-study. Highly recommend!"
    },
    {
      "name": "Sophia Martinez",
      "title": "Piano Student",
      "quote": "The piano lessons were fantastic! The teachers made complex pieces easy to understand and fun to play."
    },
    {
      "name": "David Lee",
      "title": "Drummer",
      "quote": "The drum classes were both challenging and fun. I've seen a huge improvement in my technique and rhythm."
    },
    {
      "name": "Olivia Smith",
      "title": "Violin Learner",
      "quote": "Learning violin here has been an amazing journey. The instructors are patient and their teaching methods are top-notch."
    },
    {
      "name": "James White",
      "title": "Bass Guitar Player",
      "quote": "The bass guitar classes exceeded my expectations. The academy's approach to teaching music is exceptional."
    },
    {
      "name": "Isabella Garcia",
      "title": "Flute Student",
      "quote": "I loved my flute lessons! The instructors really know how to bring out the best in their students."
    },
    {
      "name": "Alexander Harris",
      "title": "Music Producer",
      "quote": "The music production course was comprehensive and hands-on. It gave me the skills I needed to start producing my own tracks."
    },
    {
      "name": "Mia Wilson",
      "title": "Songwriter",
      "quote": "The songwriting classes helped me refine my craft and gave me new perspectives on creating music."
    },
    {
      "name": "Ethan Robinson",
      "title": "Saxophone Player",
      "quote": "The saxophone lessons were fantastic. The teachers are incredibly talented and made learning the instrument a joy."
    }
  ]
  

const TestimonialCards = () => {
  return (
    <>

    <div className='h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden'>
        <h2 className='text-3xl text-center font-bold mb-8'>Hear our Harmony: Voices of Success</h2>
        <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-6xl'>
                <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
            />
            </div>
        </div>
    </div>

    </>
  )
}

export default TestimonialCards