import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import liftSimulationPic from "../../public/images/projects/lift_simulation_img.png";
import sketchBoardPic from "../../public/images/projects/sketch_board_img.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
       bg-dark rounded-br-3xl dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duartion: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
             dark:text-dark dark:bg-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border 
    border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
       bg-dark rounded-br-3xl dark:bg-light"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duartion: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Satyam | Projects Page</title>
        <meta name="description" contents="Project Section of my website" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Lift Simulation"
                summary="A web app created using HTML, CSS, JavaScript where we can simulate lift mechanics for a client"
                link="https://satyam-lift-simulation.netlify.app/"
                githubLink="https://github.com/Satyam005/Lift_Simulation"
                type="Featured Project"
                img={liftSimulationPic}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Lift Simulation"
                summary="A web app created using HTML, CSS, JavaScript where we can simulate lift mechanics for a client"
                link="https://satyam-lift-simulation.netlify.app/"
                githubLink="https://github.com/Satyam005/Lift_Simulation"
                type="Simulator"
                img={liftSimulationPic}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Sketch Board"
                summary="A sketch board created using HTML, CSS, JavaScript, Canvas where we can draw, erase, create sticky notes, upload images adn even share the board in real time."
                link="https://satyam-lift-simulation.netlify.app/"
                githubLink="https://github.com/Satyam005/openboard-clone"
                type="Board"
                img={sketchBoardPic}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;