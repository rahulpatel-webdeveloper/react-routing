import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    // <div>
    //   <NavLink to={'/'}> Home </NavLink>
    //   <NavLink to={'/about'}> About </NavLink>
    // </div>
    <>
   <nav class="sticky top-0 h-20 bg-gray-800 p-5 sm:px-24 xl:px-64">
    <div class="mx-auto flex justify-between items-center">
        <a href="#"
           class="uppercase text-white text-xl xl:text-3xl font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter">
            <img class="mb-12 h-10 mx-auto" src="https://gotechark.com/wp-content/uploads/2023/07/Header-logo.svg" alt=""/></a>
        <button class="block md:hidden uppercase inline-flex items-center bg-green-500 px-3 py-2 rounded-lg text-white">Menu <svg class="h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg></button>
   <div class="hidden md:block">
   <NavLink to={'/'}><span  class="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500">Home</span></NavLink>
   <NavLink to={'/about'}><span class="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500">About</span></NavLink>
       <span class="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500">Contact</span>
   </div>
    </div>
</nav>
</>
  )
}