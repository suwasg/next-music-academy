'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";
const featuredWebinars=[
    {
      "title": "Mastering Vocal Techniques",
      "description": "Learn advanced vocal techniques to enhance your singing skills. This webinar covers breath control, pitch accuracy, and vocal range expansion.",
      "slug": "mastering-vocal-techniques",
      "isFeatured": true
    },
    {
      "title": "Guitar for Beginners",
      "description": "This introductory webinar is perfect for those who are new to playing the guitar. Learn the basics of chords, strumming patterns, and simple songs.",
      "slug": "guitar-for-beginners",
      "isFeatured": false
    },
    {
      "title": "Piano Improvisation",
      "description": "Discover the art of piano improvisation. This webinar will teach you how to create spontaneous music and enhance your creative expression.",
      "slug": "piano-improvisation",
      "isFeatured": true
    },
    {
      "title": "Drumming Essentials",
      "description": "Get started with drumming essentials. Learn the basic rhythms, techniques, and how to play along with different music styles.",
      "slug": "drumming-essentials",
      "isFeatured": false
    },
    {
      "title": "Songwriting 101",
      "description": "Join this webinar to learn the fundamentals of songwriting. We'll cover melody creation, lyrical writing, and song structure.",
      "slug": "songwriting-101",
      "isFeatured": true
    },
    {
      "title": "Home Music Production",
      "description": "Learn the basics of home music production. This webinar will guide you through setting up your home studio and the essentials of recording and mixing.",
      "slug": "home-music-production",
      "isFeatured": true
    },
    {
      "title": "Advanced Music Theory",
      "description": "Dive deep into advanced music theory concepts. This webinar is designed for those who want to understand the complexities of harmony, scales, and chord progressions.",
      "slug": "advanced-music-theory",
      "isFeatured": false
    },
    {
      "title": "Jazz Improvisation",
      "description": "Learn the art of jazz improvisation from seasoned musicians. This webinar covers scales, modes, and the fundamentals of jazz harmony.",
      "slug": "jazz-improvisation",
      "isFeatured": true
    },
    {
      "title": "Digital Music Marketing",
      "description": "Understand the basics of marketing your music in the digital age. This webinar will cover social media strategies, online promotion, and branding for musicians.",
      "slug": "digital-music-marketing",
      "isFeatured": true
    },
    {
      "title": "Classical Music Appreciation",
      "description": "Explore the history and beauty of classical music. This webinar is perfect for those who want to deepen their appreciation and understanding of classical compositions.",
      "slug": "classical-music-appreciation",
      "isFeatured": false
    }
  ]
  
  

const UpcomingWebinars = () => {
  return (
    <div className='p-12 bg-gray-900'>

        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhanced Musical Journey</p>
            </div>

            <div className='mt-10'>
                <HoverEffect items={featuredWebinars.slice(0,6).map(webinar=>(
                    {
                        title:webinar.title,
                        description:webinar.description,
                        link:'/'
                    }
                ))}/>
            </div>


            <div className='mt-10 text-center'>
                <Link href={'/'} 
                className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'
                >
                View All Webinars
                </Link>
            </div>
        </div>

    </div>
  )
}

export default UpcomingWebinars