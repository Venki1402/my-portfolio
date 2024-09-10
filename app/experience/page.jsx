"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [
  {
    company: "Dukaan®",
    position: "SDE Intern",
    duration: "August 2024 - Present",
    location: "Bengaluru, IN - Hybrid",
    description:
      "I'm Part of the platform team on project Bot9, responsible for developing and maintaining the core platform, including backend services and front-end integration.",
    responsibilities: [
      "Contributed to Bot9 project, utilizing Next.js for frontend development and Express.js for backend services",
      "Collaborated with the platform team to enhance and maintain core services, focusing on seamless integration between backend and frontend components",
    ],
    logo: "/assets/dukaan-logo.png",
  },
  // I will add more experiences as needed
];

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">My Experience</h2>
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.2 }}
            className="bg-[#232329] p-8 rounded-xl mb-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
              <Image
                src={exp.logo}
                alt={`${exp.company} Logo`}
                width={100}
                height={100}
                className="rounded-full mr-4 mb-4 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-semibold">{exp.position}</h3>
                <p className="text-accent">{exp.company}</p>
                <div className="flex items-center mt-2">
                  <FaCalendarAlt className="mr-2 text-accent" />
                  <span className="text-white/60 mr-4">{exp.duration}</span>
                  <FaMapMarkerAlt className="mr-2 text-accent" />
                  <span className="text-white/60">{exp.location}</span>
                </div>
              </div>
            </div>
            <p className="text-white/80 mb-4">{exp.description}</p>
            <ul className="list-disc list-inside text-white/80">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
