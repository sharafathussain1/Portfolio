"use client"
import { motion } from "motion/react";

import { useState } from "react"
import Image from 'next/image'
import Link from "next/link";

export default function navbar (){

  const [isOpen , setisOpen] =useState(false)

  const toggleHandleFunction=()=>{
    setisOpen(!isOpen)
  }
  return(
<motion.nav className="bg-white border-b-2 border-gray-500  sticky z-10 top-0 "

initial={{
  y:80
}}
animate={{
  y:0
}}
transition={{
  duration:2
}}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
   
   <Image
      src="/sh.png"
      width={70}
      height={20}
      alt="Picture of the author"
    />     
      
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        <Image src="/sharafat.png" alt="image not found" height={100} width={80}/>
      </span>
    </div>
    <button
     onClick={toggleHandleFunction}
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded={isOpen ? "true" :"false"}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className={`  w-full md:block md:w-auto ${isOpen ? "block absolute top-20" : "hidden"}`}  id="navbar-default ">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            href="/"
            className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link href='/project'  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Project
          </Link>
          
        </li>
        <li>
        <Link href='/skill'  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Skill
          </Link>
        </li>
        <li>
        <Link href='/about'  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          About
          </Link>
        </li>
        <li>
        <Link href='/contact'  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</motion.nav>
  )
}
