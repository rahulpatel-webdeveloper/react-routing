import React from 'react'
const portfoliodata = ["https://gotechark.com/wp-content/uploads/2024/07/MarinersMuseum_thumb.jpg",
     "https://gotechark.com/wp-content/uploads/2024/06/Nauticus-thumb.jpg", "https://gotechark.com/wp-content/uploads/2024/06/vdmc-featured-img.jpg"];
export default function Home1() {
  return (
    <>
    <div className="subpixel-antialiased font-Montserrat ">

<main>
    <section className="bg-blue-500 py-32 ">      
        <figure className="container px-16 pt-12 mx-auto">            
            <img className="mb-12 h-64 mx-auto" src="https://gotechark.com/wp-content/uploads/2023/09/banner-min.png" alt=""/>
        </figure>
        <h1 className="text-center uppercase text-white text-5xl lg:text-6xl font-bold  leading-none tracking-normal">
        A Digital Marketing Company You Can Trust
        </h1>
        <div className="flex flex-row items-center justify-center py-4">
            <span className="h-1 w-24 bg-white rounded-full mx-2"></span>
            <svg className="h-12 fill-current text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                        d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
            </svg>
            <span className="h-1 w-24 bg-white rounded-full mx-2"></span>
        </div>
        <p className="px-12 w-600 m-auto text-center text-white text-xl font-normal font-sans">At TechArk, we solve business challenges and deliver digital innovation solutions with long-lasting impact. Our agency team of 120+ experienced custom software and website developers, designers, and digital marketers have won awards, changed businesses, and, most of all, gained the trust of clients big and small.</p>
    </section>
    <section className="bg-white -mt-12 py-16">
        <h1 className="text-center uppercase text-black text-4xl font-bold  leading-none tracking-normal">
            Portfolio
        </h1>
        <div className="flex flex-row items-center justify-center py-4">
            <span className="h-1 w-24 bg-black rounded-full mx-2"></span>
            <svg className="h-12 fill-current text-black " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                        d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
            </svg>
            <span className="h-1 w-24 bg-black rounded-full mx-2"></span>
        </div>
       
<div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
    <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col">                
                <img className="object-cover h-full" src='https://gotechark.com/wp-content/uploads/2023/08/Johns-Brothers.jpg' alt='' />
            </div>
        </div>
        <div className="flex flex-1">        
            <div className="grid grid-cols-2 gap-2">
            {portfoliodata.map(item => {
          return <div>
                    <img className="object-cover h-full" src={item} />
                 </div>;
        })}             
              
            </div>
        </div>
    </div>
</div>
    </section>
    <section id="about-section" className="bg-green-500 -mt-12 py-16">
        <h1 className="text-center uppercase text-white text-4xl font-bold  leading-none tracking-normal">
            About
        </h1>
        <div className="flex flex-row items-center justify-center py-4">
            <span className="h-1 w-24 bg-white rounded-full mx-2"></span>
            <svg className="h-12 fill-current text-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                        d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
            </svg>
            <span className="h-1 w-24 bg-white rounded-full mx-2"></span>
        </div>
        <div className="flex flex-col lg:flex-row max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
        <div className="mx-6 text-white text-xl py-4">At TechArk, we solve business challenges and deliver solutions with long-lasting impact. Our global team of 120+ experienced developers, designers and digital marketers have won awards, changed businesses and, most of all, gained the trust of clients big and small.
        As digital innovation leaders, we stay true to the values that built our reputation for quality and reliability.
        </div>
        
        </div>
        <div className="flex justify-center py-8">
            <bautton className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-normal py-3 px-5 rounded-lg inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                </svg>
                <span>Free Download!</span>
            </bautton>
        </div>
    </section>
    <section className="bg-white -mt-12 py-16">
        <h1 className="text-center uppercase text-black text-4xl font-bold  leading-none tracking-normal">
            Contact Me
        </h1>
        <div className="flex flex-row items-center justify-center py-4">
            <span className="h-1 w-24 bg-black rounded-full mx-2"></span>
            <svg className="h-12 fill-current text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                        d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z"/>
            </svg>
            <span className="h-1 w-24 bg-black rounded-full mx-2"></span>
        </div>
        <form className="px-6 pb-12 max-w-2xl mx-auto">
            <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
                <input className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
                       type="text" placeholder="Name" aria-label="Name"/>
            </div>
            <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
                <input className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
                       type="text" placeholder="Email Address" aria-label="Email Address"/>
            </div>
            <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
                <input className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
                       type="text" placeholder="Phone Number" aria-label="Phone Number"/>
            </div>
            <div className="flex items-center border-b border-b-2 border-gray-400 py-10">
                <label>
                    <textarea
                            className="appearance-none border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
                            rows="5" placeholder="Message"></textarea>
                </label>

            </div>
            <div className="py-5">
                <button className="bg-green-500 px-8 py-5 rounded-lg text-white">Send</button>
            </div>
        </form>
    </section>
    <section className="bg-gray-800 -mt-12 py-16">
        <div className="flex flex-col md:flex-row text-white text-center">
            <div className="p-6 md:w-1/3">
                <h1 className="uppercase text-2xl font-bold leading-none tracking-normal pb-5">Location</h1>
                <p>415 W York St #103 <br /> Norfolk, VA 23510</p>
            </div>
            <div className="p-6 md:w-1/3">
                <h1 className="uppercase text-2xl font-bold  leading-none tracking-normal">Around the web</h1>
                <div className="flex justify-center py-5 ">
                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                        <svg className="fill-current w-5 h-5 hover:text-blue-900" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"><title>Twitter</title><path
                                d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
                    </span>
                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                        <svg className="fill-current w-5 h-5 hover:text-blue-900" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"><title>Twitter</title><path
                                d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
                    </span>
                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                        <svg className="fill-current w-5 h-5 hover:text-blue-900" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"><title>Twitter</title><path
                                d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
                    </span>
                    <span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
                        <svg className="fill-current w-5 h-5 hover:text-blue-900" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 20 20"><title>Twitter</title><path
                                d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>
                    </span>
                </div>

            </div>
            <div className="p-6 md:w-1/3">
                <h1 className="uppercase text-2xl font-bold leading-none tracking-normal pb-5">Services</h1>
                <p className="text-xl break-normal">Website Design Packages <br/>
Hosting & Maintenance <br/>
Software <br/>
Digital Marketing
                </p>
            </div>
        </div>
    </section>
</main>
</div>
    </>
  )
}
