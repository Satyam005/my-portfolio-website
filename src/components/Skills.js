import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute"
      //   whileHover={{ scale: 1.05 }}
      whileHover={{
        backgroundColor: [
          "#121212",
          "rgba(131,58,180,1)",
          "rgba(253,29,29,1)",
          "rgba(252,176,69,1)",
          "rgba(131,58,180,1)",
          "#121212",
        ],
        transition: {
          duration: 1,
          repeat: Infinity,
        },
      }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer"
          whileHover={{
            backgroundColor: [
              "#121212",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(252,176,69,1)",
              "rgba(131,58,180,1)",
              "#121212",
            ],
            transition: {
              duration: 1,
              repeat: Infinity,
            },
          }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-19vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-11vw" />
        <Skill name="JavaScript" x="24vw" y="4vw" />
        <Skill name="TypeScript" x="0vw" y="12vw" />
        <Skill name="ReactJS" x="-25vw" y="-12vw" />
        <Skill name="NextJS" x="25vw" y="-12vw" />
        <Skill name="NodeJS" x="-28vw" y="8vw" />
        <Skill name="ExpressJS" x="-18vw" y="20vw" />
        <Skill name="Tailwind CSS" x="20vw" y="19vw" />
        <Skill name="GitHub" x="0vw" y="-19vw" />
      </div>
    </>
  );
};

export default Skills;
