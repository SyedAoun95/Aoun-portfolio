import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const fallbackImage = "https://via.placeholder.com/300?text=Image+Unavailable";

const ProjectCardSafe = (props) => {
  try {
    const { name, description, tags, image, source_code_link } = props;

    return (
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
            <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
            >
              View
            </button>
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
    );
  } catch (err) {
    console.error("ProjectCard render error:", err);
    return null;
  }
};

const Works = () => (
  <>
    <h2 className={`${styles.sectionHeadText} text-white`}>Projects</h2>

    <div className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Following projects show my skills.
    </div>

    <div className="mt-10 flex flex-wrap gap-7 justify-center">
      {projects.map((proj, idx) => (
        <ProjectCardSafe key={idx} {...proj} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "");

