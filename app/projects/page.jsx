"use client";

// Imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// importing assets
import projectImageEditor from "../../public/assets/projects/ImageEditor.jpg";
import projectBookLibrary from "../../public/assets/projects/bookLibrary.jpg";
import projectSwiftPay from "../../public/assets/projects/swiftpay.png";
import WorkSliderButtons from "@/components/WorkSliderButtons";

// Object Array
const projectList = [
  {
    num: "01",
    category: "fullstack",
    title: "Book Library",
    Description:
      "A book library management system that allows you to efficiently manage book loans and returns",
    stack: [{ name: "React Js" }, { name: "Spring" }, { name: "Java" }],
    image: projectBookLibrary,
    live: "https://github.com/Venki1402/BookLibraryService",
    github: "https://github.com/Venki1402/BookLibraryService",
  },
  {
    num: "02",
    category: "Backend",
    title: "Image Editor",
    Description:
      "An image editor that allows you to upload an image and apply filters to it",
    stack: [{ name: "Java" }, { name: "Bash" }],
    image: projectImageEditor,
    live: "https://github.com/Venki1402/Image_Editor",
    github: "https://github.com/Venki1402/Image_Editor",
  },
  {
    num: "03",
    category: "fullstack",
    title: "SwiftPay",
    Description:
      "A payment gateway that allows you to make payments and receive payments",
    stack: [{ name: "React Js" }, { name: "Node Js" }, { name: "MongoDB" }],
    image: projectSwiftPay,
    live: "https://swiftpay-lake.vercel.app",
    github: "https://github.com/Venki1402/SwiftPay",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projectList[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectList[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.Description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live link button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github link button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]" 
              onSlideChange={handleSlideChange}
            >
              {projectList.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[470px] relative group flex justify-center items-center bg-pink-50/20">
                    {" "}
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "top left" }}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
