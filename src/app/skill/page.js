import Image from "next/image";

const skills =[
  {
    image : "/nextjs.png",
    title : "Next js",
    discription :"Proficient in Next.js, utilizing its powerful features like server-side rendering, static site generation, and optimized routing to build fast, scalable, and SEO-friendly web applications."
  },
  {
    image : "/react.png",
    title : "React js",
    discription : "Skilled in React, creating dynamic, responsive user interfaces with reusable components, state management, and hooks to build efficient, scalable web applications." 
  },
  {
    image : "/bootsrap.png",
    title : "Bootstrap",
    discription :"Experienced with Bootstrap, utilizing its pre-built components and grid system to create responsive, mobile-first web designs quickly and efficiently."
  },
  {
    image : "/css.png",
    title : "Css",
    discription :"Skilled in CSS, designing visually appealing and responsive layouts with modern techniques like Flexbox and Grid to create seamless user experiences across devices."
  },
  {
    image : "/html.png",
    title : "Html",
    discription :"Proficient in HTML, structuring web content with semantic tags to create clean, accessible, and SEO-friendly web pages."
  },
  {
    image : "/tailwaind.png",
    title : "Tailwaind Css",
    discription :"Experienced with Tailwind CSS, leveraging its utility-first approach to build custom, responsive designs quickly and efficiently, ensuring a streamlined and maintainable UI."
  },
  {
  image : "/firebase.png",
   title :"Firebase",
   discription:"Beginner in using Firebase with Next.js, integrating real-time databases, authentication, and cloud functions to build dynamic, server-side rendered applications."
  },
  {
    image : "/express.png",
    title : "Express js",
    discription :"Beginner in Express.js, learning to build server-side applications and APIs with this lightweight Node.js framework, focusing on routing, middleware, and RESTful services."
  },
  {
    image : "/mongodb.png",
    title:"Mogogdb",
    discription :"Beginner in MongoDB, learning to work with NoSQL databases to store, query, and manage data using collections and documents for scalable applications."
  },
  {
    image : "/javascript.png",
    title:"Javascript",
    discription :"Proficient in JavaScript, creating interactive and dynamic web applications with ES6+ features, including functions, objects, and asynchronous programming techniques like promises and async/await."
  },
  {
    image : "/typescript.svg",
    title:"Typescript",
    discription :"Proficient in TypeScript, using static typing to improve code reliability and maintainability, while leveraging ES6+ features, interfaces, and asynchronous programming with promises and async/await."
  }
]

export default function Skill(){
    return(
<section className="text-gray-600 body-font p-4">
  <div className=" flex justify-center items-center">
            <Image  src ="/skill.png" height={500} width={600} alt="" />
            </div>
  <div className="container px-5 py-10 mx-auto">
    {/* <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        Pitchfork Kickstarter Taxidermy
      </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
    </div> */}
    <div className="flex flex-wrap -m-4">

    {skills.map(({title , image , discription})=>(
     <div key={title} className="xl:w-1/2 md:w-1/2 p-4">
        <div className="border-2 border-gray-200 p-6 rounded-lg  hover:border-blue-500   ">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
           <Image src={image}alt="" height={10} width={100}/>
    
          </div>
          <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
            {title}
          </h2>
          <p className="leading-relaxed text-base">
           {discription}
          </p>
        </div>
      </div>
    ))}
    
    </div>
    {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
    </button> */}
  </div>
</section>

    )
}