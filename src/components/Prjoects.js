import React from "react";
import { motion } from "framer-motion";
// import spotify from "./porfolio projects pics/3.png";
import ecomerce from "./porfolio projects pics/e-school.png";
// import Food_Store_1 from "./porfolio projects pics/1.png";
// import Food_Store_2 from "./porfolio projects pics/4.png";
// import portfolio from "./porfolio projects pics/5.png";
import airbnb from "./porfolio projects pics/acdemic.png";
// import netflix from "./porfolio projects pics/7.png";
import social from "./porfolio projects pics/business.png";
import itApp from "./porfolio projects pics/e-commerce.png";
// import disnep from "./porfolio projects pics/11.png";
import codeeditor from "./porfolio projects pics/portfolio.png";

function Prjoects({ projectName, projectDetails }) {
  const projects = [
    {
      name: "E-book website",
      details: "This is a front-end website with just html and css.",
      imgSrc: ecomerce,
      github: "https://github.com/Mehedi325/E-school-project",
      liveDemo: "https://mehedi325.github.io/E-school-project/",
    },
    {
      name: "Business growth website",
      details:
        "Front-end Business growth website. This website has all required functionality.",
      imgSrc: social,
      github: "https://github.com/Mehedi325/React-project-Business",
      liveDemo: "https://react-project-business.vercel.app/",
    },

    {
      name: "E-Commerce website",
      details:
        "A fully responsive E-Commerce website. This Website is bulit with react.js .",
      imgSrc: itApp,
      github: "https://github.com/Mehedi325/E-commerce-website",
      liveDemo: "https://e-commerce-website-shopping.vercel.app/",
    },
    {
      name: "Education Website",
      details:
        "This is a React.js project. In this project i used Html,css,javascript & React.",
      imgSrc: airbnb,
      github: "https://github.com/Mehedi325/Education_Website",
      liveDemo: "https://education-website-fawn.vercel.app/",
    },
    {
      name: "Portfolio website",
      details: "This website is built with react.js .",
      imgSrc: codeeditor,
      github: "https://github.com/Mehedi325/Portfolio_website",
      liveDemo: "https://portfolio-website-mehedi.vercel.app/",
    },

  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-500/40 scrollbar-thumb-[#3374FF]/30">
        {projects.map((project, i) => (
          <div
            key={Math.random()}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className=""
              src={project.imgSrc}
              alt="code image"
              width={1000}
              height={1000}
            />
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-2xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#3374FF]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.name}
              </h4>
              <div className="flex justify-evenly">
                <a
                  href={project.github}
                  className="cursor-pointer font-semibold text-2xl underline decoration-[#3374FF]/50"
                >
                  Github
                </a>
                <a
                  href={project.liveDemo}
                  className="cursor-pointer font-semibold text-2xl underline decoration-[#3374FF]/50"
                >
                  Live Demo
                </a>
              </div>
              <p className=" text-lg text-center md:text-left">
                {project.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#3374FF]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Prjoects;
