"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiTailwindcss, SiTypescript, SiNextDotJs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I'm a CS Undergrad at BITS, driven by a passion for software engineering. I am actively seeking an internship to apply and enhance my technical skills. With a strong academic background in software engineering and hands-on experience with various programming languages, I am eager to contribute to innovative projects and learn from experienced professionals. I am a quick learner, always ready to tackle new challenges and grow in the field.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Venkatesh Alampally",
    },
    {
      fieldName: "Experience",
      fieldValue: "still learning 😁",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Personal site",
      fieldValue: "http://linktr.ee/venkatesh_alampally",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 80749 62223",
    },
    {
      fieldName: "X",
      fieldValue: "@ASaiVenkatesh1",
    },
    {
      fieldName: "Mail",
      fieldValue: "saivenkatesh.alampally@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Telugu, Hindi",
    },
  ],
};

const education = {
  title: "My Education",
  description: "Here's a brief overview of my educational background.",
  items: [
    {
      institution: "Genesis International School",
      degree: "Middle School",
      duration: "2017",
    },
    {
      institution: "FIITJEE School",
      degree: "High School",
      duration: "2023",
    },
    {
      institution: "Scaler School of Technology",
      degree: "Computer Science",
      duration: "2027",
    },
    {
      institution: "Bits Pilani",
      degree: "Bsc. Computer Science",
      duration: "2026",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Here are some of the technologies I've worked with.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextDotJs />,
      name: "next.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="About" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="certificates" className="w-full">
              certificates
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  );
};
export default resume;
