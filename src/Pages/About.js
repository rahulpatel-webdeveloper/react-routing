import React from 'react'

export default function About() {
  return (
    <>
    <section id="about-section" class="bg-green-500 -mt-12 py-16">
        <h1 class="text-center uppercase text-white text-4xl font-bold  leading-none tracking-normal">
        Services to Step Up Your Online Presence
        </h1>
        <div class="flex flex-row items-center justify-center py-4">
            <span class="h-1 w-24 bg-white rounded-full mx-2"></span>
            <svg class="h-12 fill-current text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                        d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
            </svg>
            <span class="h-1 w-24 bg-white rounded-full mx-2"></span>
        </div>
        <div class="flex flex-col lg:flex-row max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <div class="mx-6 text-white text-xl py-4">Freelancer is a free tailwind css theme created from Freelancer theme by Start Bootstrap.
The entire template was written using only the default configuration file. 
        </div>
        <div class="mx-6 text-white text-xl py-4">
            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email
            address to the contact form to make it fully functional!</div>
        </div>
        <div class="flex justify-center py-8">
            <button class="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-normal py-3 px-5 rounded-lg inline-flex items-center">
                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                <span>Free Download!</span>
            </button>
        </div>
    </section>
    </>
  )
}
