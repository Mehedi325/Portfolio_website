import React from "react";
import { motion } from "framer-motion";
import pic from "./mm (1).png";
import "./All.css";

function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-7 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={pic}
        className="-mb-32 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-72 md:h-96 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-2xl md:text-4xl font-semibold">
          
          <span className="underline decoration-[#3374FF]/50"></span>{" "}
        
        </h4>
        <p className="text-base">
        As a front-end web developer, I am passionate about crafting immersive and user-friendly digital experiences.   
        With a strong foundation in HTML, CSS, and JavaScript, I strive to create visually appealing and responsive 
        websites that engage and delight users.

        My expertise lies in translating design concepts into functional and interactive interfaces, ensuring seamless 
        navigation and optimal performance across various devices and browsers. I am well-versed in modern front-end 
        frameworks and libraries, such as React, which enables me to build dynamic and scalable applications 
        efficiently.
        </p>
      </div>
    </div>
  );
}

export default About;
