"use client";

// Imports
import { motion } from "framer-motion";
import { React, useState } from "react";
// import { useState } from "react";
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
import { Description } from "@radix-ui/react-dialog";

// Object Array
const projectList = [
  {
    num: "01",
    category: "frontend",
    title: "2048",
    Description: "my version of the popular 2048 game",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/../public/assets/projects/2048.jpg",
    live: "https://venki1402.github.io/2048/",
    github: "https://github.com/Venki1402/2048",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Book Library",
    Description:
      "A simple book library that allows you to add, delete and update books",
    stack: [{ name: "React Js" }, { name: "Spring" }, { name: "Java" }],
    image: "/../public/assets/projects/2048.jpg",
    live: "https://book-library-service.vercel.app/",
    github: "https://github.com/Venki1402/BookLibraryService",
  },
  {
    num: "03",
    category: "Backend",
    title: "Image Editor",
    Description:
      "A simple image editor that allows you to upload an image and apply filters to it",
    stack: [{ name: "Java" }, { name: "Bash" }],
    image: "/../public/assets/projects/ImageEditor.jpg",
    live: "https://github.com/Venki1402/Image_Editor",
    github: "https://github.com/Venki1402/Image_Editor",
  },
  {
    num: "04",
    category: "frontend",
    title: "Todo List",
    Description:
      "A simple todo list that allows you to add, delete and update tasks along with priority",
    stack: [{ name: "React Js" }],
    image: "/../public/assets/projects/tolist.jpg",
    live: "https://to-do-list-v1-five.vercel.app/",
    github: "https://github.com/Venki1402/to-do-list-v1",
  },
  {
    num: "05",
    category: "frontend",
    title: "Analog Clock",
    Description: "A simple analog clock that displays the current time",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/../public/assets/projects/clock.jpg",
    live: "https://venki1402.github.io/analogClock/",
    github: "https://github.com/Venki1402/analogClock",
  },
];

const projects = () => {
  const [project, setProject] = useState(projectList[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold  text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
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
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px]">
            {projectList.map((project, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  className="rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};

export default projects;
