import Image from "next/image"
export default function Contact(){
    return(
        <section className="text-gray-600 body-font relative p-4">
          <div className=" flex justify-center items-center">
          <Image  src ="/contact.png" height={500} width={600} alt="" />
          </div>
              

  <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">

    
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative  hover:border-blue-400 border-2">
    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3617.1018555981323!2d66.98915807537422!3d24.962648977862713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU3JzQ1LjUiTiA2NsKwNTknMzAuMiJF!5e0!3m2!1sen!2s!4v1741149678038!5m2!1sen!2s"
    width="100%"
    height="100%"
    className="absolute inset-0"
    frameBorder={0}
    title="map"
    marginHeight={0}
    marginWidth={0}
    scrolling="no"
     style={{ filter: "grayscale(1) contrast(1.2) opacity(1)" }}
>
       </iframe>
    
      
      <div className="bg-white relative flex flex-wrap py-6 w-[550px] rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           Sharafat hussain <br/>
           Karachi , Pakistan
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">sharafat.hussain9dec@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+92-317-8732366</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 shadow-inner rounded-sm shadow-slate-500 px-6">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Contact
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
      Let’s
      create something great together!
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm font-bold text-gray-600 hover-underline-animation">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full hover-underline-animation bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="hover-underline-animation font-bold leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="hover-underline-animation font-bold leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className= " shadow-lg shadow-slate-600 text-white bg-primary text-primary-foreground  hover:bg-primary/90 py-2 px-6  rounded text-lg ">
        Send
      </button>
     
    </div>
  </div>
</section>

    )
}