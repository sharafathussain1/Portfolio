"use client"
import { motion } from 'framer-motion';
import Image from "next/image";
import { Poppins, Rowdies } from "next/font/google";
import { useEffect, useState } from 'react';
import Link from 'next/link';

const rowdies = Rowdies({ subsets: ["latin"], weight: "700" });
const poppins = Poppins({ subsets: ["latin"], weight: "300" });
const BoldPoppin = Poppins({ subsets: ["latin"], weight: "700" });
export default function About() {
  const[isBlur , setIsblur] =useState(null)
  useEffect(()=>{
    setIsblur(true)

  },[])


  return (
   
    <section className="text-gray-600 body-font p-4 ">
    <div
      className={`flex justify-center items-center`} 
    >
      <Image src="/about.png" height={500} width={600} alt="" />
    </div>


  <div className="container mx-auto flex px-5 py-3 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    <motion.h1
      
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={isBlur ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className={`title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ${rowdies.className}`}
    >
     I'am Sharafat
    </motion.h1>
     
      <h2 className={`sm:text-3xl font-semibold ${BoldPoppin.className}`}>Web Developer ...</h2>
      <p className={`mb-8 leading-relaxed mt-2 ${poppins.className}`}>
      I have recently completed my studies in Frontend Development and have transitioned into Backend Development to further my 
      expertise and become a Full Stack Developer. Additionally, I am currently pursuing my Bachelor of Science in Computer Science
       (BSCS) from the Federal University of Karachi.      </p>
      
      <div className="flex lg:flex-row md:flex-col gap-10 ">
        <Link href="https://www.linkedin.com/in/sharafat-hussain1" target='_blank'>
        <Image src="/linkdin.png" alt='linkdin image' height={50} width={50}  className='cursor-pointer  transition duration-1000 hover:p-[2px]'/>
        </Link>

        <Link href="https://github.com/sharafathussain1" target="_blank">
        <Image src="/github.png" alt='linkdin image' height={50} width={50} className='cursor-pointer transition duration-1000 hover:p-[2px]' />
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="\profile.jpg"
      />
    </div>
  </div>
</section>

    
    
  );
}
