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

import {
  SiNextdotjs,
  SiTypescript,
  // SiNodedotjs,
  SiTailwindcss,
  SiCplusplus,
  SiExpress,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "I am a CS undergraduate at BITS with a passion for software engineering, actively seeking an internship to apply and enhance my skills. With a solid academic foundation and hands-on experience in multiple programming languages, I am eager to contribute to innovative projects and learn from seasoned professionals. As a quick learner, I am always ready to take on new challenges and grow in the field.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Venkatesh Alampally",
    },
    {
      fieldName: "Experience",
      fieldValue: "SDE Intern at Dukaan",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "linktree",
      fieldValue: "linktr.ee/venkatesh_alampally",
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
      fieldName: "Languages",
      fieldValue: "English, Telugu",
    },
    {
      fieldName: "Mail",
      fieldValue: "saivenkatesh.alampally@gmail.com",
    },
  ],
};

const cp = [
  {
    fieldName: "Codeforces",
    fieldValue: "codeforces.com/profile/Swift_ven14",
  },
  {
    fieldName: "Atcoder",
    fieldValue: "atcoder.jp/users/Swift_Ven14",
  },
  {
    fieldName: "Codechef",
    fieldValue: "codechef.com/users/venki1402",
  },
  {
    fieldName: "Leetcode",
    fieldValue: "leetcode.com/u/venki1402",
  },
];

const education = {
  title: "My Education",
  description: "Here's a brief overview of my educational background.",
  items: [
    {
      institution: "SST",
      degree: "Computer Science",
      duration: "2027",
    },
    {
      institution: "Bits Pilani",
      degree: "Bsc. Computer Science",
      duration: "2026",
    },
    {
      institution: "FIITJEE School",
      degree: "High School",
      duration: "2023",
    },
    {
      institution: "Genesis School",
      degree: "Middle School",
      duration: "2017",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "Here are some of the technologies I've worked with.",
  skillList: [
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind css",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
  ],
};

const Resume = () => {
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
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="cp">CP</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}

          <div className="min-h-[70vh] w-full">
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* education */}

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* certificates */}
            <TabsContent value="certificates" className="w-full">
              I don{"\'"}t have any certificates yet 😅
            </TabsContent>

            {/* cp */}
            <TabsContent value="cp" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">Competitive Programming</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  Here are my profiles on various competitive programming
                  platforms.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto xl:mx-0">
                  {cp.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] p-4 rounded-xl flex flex-col items-center xl:items-start gap-2"
                    >
                      <span className="text-accent font-semibold">
                        {item.fieldName}
                      </span>
                      <a
                        href={`https://${item.fieldValue}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-accent transition-colors"
                      >
                        {item.fieldValue}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-x">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
