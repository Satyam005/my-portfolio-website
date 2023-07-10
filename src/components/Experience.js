import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  const points = work.split(". "); // S
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl mb-2 sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm"
        >
          {time} | {address}
        </span>
        <ul className="mt-2">
          {points.map((point) => (
            <li key={point} className="font-medium w-full mb-1 md:text-sm">
              {/* Identify and wrap the bold portion with <strong> tags */}
              {point
                .split("**")
                .map((part, index) =>
                  index % 2 === 0 ? part : <strong key={index}>{part}</strong>
                )}
            </li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left[-30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Application Developer"
            company="IBM India Pvt. Ltd."
            time="2019 - 2022"
            address="DLF Cyber City, Gurugram, Haryana, India"
            companyLink="https://www.ibm.com/in-en"
            work="Built a utility using React JS that reduced manual labour for
**100+ employees by 90%** .Extensively used advanced React
concepts like custom hooks, lifecycle methods, context API, functional components, React Router, HOCs, etc. Worked as a Java developer in DASH-TAS application of Hertz
project. It’s a counter application use for booking Hertz rental
cars across US and European countries.. Converted the Hertz TAS rental booking application from a
petrol/diesel model to a hybrid model that includes electric
vehicles.. Developed the Touchlist Exitgate functionality wherein the time
to book a rental was **reduced by 30%**."
          />
          <Details
            position="Frontend Developer"
            company="ACE Online"
            time="2022 - Present"
            address="Abids, Hyderabad, Telangana, India."
            companyLink="https://ace.online"
            work="Played a pivotal role in optimizing the website, resulting in improved performance from **75 to 95%** on the lighthouse tool and enhanced user experience.. Integrated leadsquare and mixpanel events to track user activity and user interactions on the website, **improved lead generation** by implementing targeted lead
             capture forms using LeadSquare, **enhanced user engagement** by analyzing Mixpanel event data and making
              data-driven optimizations.. Collaborated as a key member of the **growth team**, actively driving
               initiatives to increase the user base and create new avenues for revenue generation.. Spearheaded the development
                of a proprietary test platform, empowering the company to offer a comprehensive and customized learning
                 experience to **thousand of its users**."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
