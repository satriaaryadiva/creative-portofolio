"use client";
import React from "react";
import ProjectLayout from "./ProjectLayout";
import { motion } from "framer-motion";
import { IProjectsData } from "@/app/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};
const ProjectList = ({ projects }: { projects: IProjectsData[] }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full  selection: max-w-auto xs:max-w-3xl px-4 mx-auto lg:px-20 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
