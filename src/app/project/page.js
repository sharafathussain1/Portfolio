import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Projects(){
const projects =[
  {
    image :"/expense.png",
    subtitle :"Next js",
    name :"Expense Traker",
    discription :"A fully responsive and efficient Expense Tracker app built using Next.js  and Firebase.Users can add, view, and categorize expensese.Fully responsive design. ",
    link:"https://next-js-expense-tracker-sh.vercel.app/signup"
  },
  {
    image :"/calculator.png",
    subtitle :"Html , Css , Javascript ",
    name :"Calculator",
    link:"https://sharafathussain1.github.io/calulator/",
    discription :"A simple and responsive Calculator app built using HTML, CSS, and JavaScript. The app allows users to perform basic arithmetic operations in an intuitive, easy-to-use interface. "
  },
  {
    image :"/todo.png",
    subtitle :"Html , Css ,Javascript",
    name :"Todo app",
    link:"https://sharafathussain1.github.io/Todo-app/",
    discription :" A simple and intuitive task management app built with HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks, helping them stay organized and productive."
  },
  {
    image :"/burger.png",
    subtitle :"Html , Css ",
    name :"Burger King clone",
    link:"https://sharafathussain1.github.io/Burger-King/",
    discription :"A Burger King website design created using HTML and CSS. It’s a static webpage that mimics the look and feel of the original Burger King site."
  }
] 

    return(
<section className="text-gray-600 body-font p-4">
  <div className="container px-5 py-10 mx-auto">
     <div className=" flex justify-center items-center"
    
     > 
     
    
      <Image  src ="/project.png" height={500} width={600} alt="" />

              </div>
    {/* <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Pitchfork Kickstarter Taxidermy
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div> */}
    <div className="flex flex-wrap -m-4">

      {
        projects.map(({image , subtitle , discription ,link ,name })=>(
<div key={name} className="xl:w-1/4 md:w-1/2 p-4 ">
        <div className="bg-gray-100 p-6 rounded-lg h-[520px] border-2">
          <Image
            className=" rounded w-full object-cover object-center mb-6"
            src={image}
            alt="content"
            height={500}
            width={500}
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {subtitle}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
           {name}
          </h2>
          <p className="leading-relaxed text-base  h-[140px]">
          {discription}
          </p>
          <div className="w-full flex items-center justify-center   mt-11">
            <Link href={link} target="_blank">
          <Button >Live Link</Button>
          </Link>

          </div>
        </div>
      </div>
        ))
      }
      
     
    </div>
  </div>
</section>

    )
}