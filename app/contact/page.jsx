"use client";

// imports
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// data
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 80749 62223",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "saivenkatesh.alampally@icloud.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Hyderabad, India",
  },
];

const Contact = () => {
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let{"\'"}s work together!</h3>
              <p className="text-white/60">
              I{"\'"}m eager to collaborate on innovative projects and learn from experienced professionals. Let{"\'"}s achieve great results together.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select project type"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select project type</SelectLabel>
                      <SelectItem value="est">FullStack development</SelectItem>
                      <SelectItem value="cst">Backend development</SelectItem>
                      <SelectItem value="mst">Frontend development</SelectItem>
                      <SelectItem value="wst">Web development</SelectItem>
                    </SelectGroup>
                  </SelectContent>
              </Select>
              {/* text-area */}
              <Textarea className="h-[200px]" placeholder="Type your message here" />
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
