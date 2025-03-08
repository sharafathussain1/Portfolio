"use client"
import { Poppins } from "next/font/google";
import { motion } from 'framer-motion';
import { Rowdies } from "next/font/google";
import SideAnimation from "@/components/side";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState  , useEffect} from "react";
const poppins = Poppins({ subsets: ["latin"], weight: "700" });
const rowdies = Rowdies({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
    const[isBlur , setIsblur] =useState(null)
    useEffect(()=>{
      setIsblur(true)
  
    },[])
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className=" flex justify-center items-center">
            <SideAnimation />
          </div>
          {/* <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://dummyimage.com/720x600"
      /> */}
        </div>
        <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
           <motion.h1
              
              initial={{ filter: 'blur(20px)', opacity: 0 }}
              animate={isBlur ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className={`title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ${rowdies.className}`}
            >
             Hi, I’m SHARAFAT!
            </motion.h1>
             
          {/* <h1
            className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ${rowdies.className}`}
          >
            Hi, I’m SHARAFAT!
          </h1> */}
          <p className={`mb-8 leading-relaxed ${poppins.className}`}>
            I’m a web developer specializing in front-end development. I build
            clean, user-friendly websites <br /> using technologies like HTML,
            CSS, JavaScript, and Nextjs / React js. Let’s <br />
            create something great together!
          </p>
          <div className="flex justify-center">
            <Link href="/resume.pdf"  download="Sharafat-cv.pdf">
            <Button className="inline-flex text-white rounded text-lg tracking-wider hover:bg-blue-800">
              Download CV
            </Button>
            </Link>
           
           
          </div>
        </div>
      </div>
    </section>
  );
}
