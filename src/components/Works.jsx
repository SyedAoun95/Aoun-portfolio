import React from "react";
import { motion } from "framer-motion";
import { github } from "../assets"; // ✅ Ensure this path is correct
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Motion helper
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

const fallbackImage = "https://via.placeholder.com/300?text=Image+Unavailable";

const ProjectCardSafe = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <motion.div
      variants={fadeIn(index * 0.2)} // Staggered by index
      initial="hidden"
      animate="visible"
    >
      <div className="bg-tertiary p-5 rounded-2xl w-full max-w-[360px]">
        <div className="relative w-full h-[230px]">
          <img
            src={image || fallbackImage}
            alt={name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallbackImage;
            }}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end p-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <h3 className="text-white font-bold text-[24px] mt-5">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => (
  <>
    <h2 className={`${styles.sectionHeadText} text-white`}>Projects</h2>

    <div className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
 Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
    </div>

    <div className="mt-10 flex flex-wrap gap-7 justify-center">
      {projects.map((proj, idx) => (
        <ProjectCardSafe key={idx} {...proj} index={idx} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "");
