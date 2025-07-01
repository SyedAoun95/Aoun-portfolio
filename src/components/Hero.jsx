import { motion } from "framer-motion";
import { styles } from "../styles";
import About from "../assets/About.jpg"; // ✅ Correct relative path

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Profile Image with glow */}
      <div className="z-10 w-52 h-52 rounded-full border-4 border-[#915EFF] p-1 mb-6">
        <img
          src={About}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <h1 className="z-10 text-white text-5xl sm:text-6xl font-bold mb-2">
        Syed <span className="text-[#915EFF]">Aoun Naqvi</span>
      </h1>

      {/* Subtitle */}
      <p className="z-10 text-white-100 text-xl sm:text-2xl mb-4">
        Professional Web Developer | React & Cross-Platform Apps Expert
      </p>

      {/* Description */}
      <p className="z-10 text-gray-300 max-w-2xl text-base sm:text-lg mb-8">
        Full-stack web and React Native app developer with expertise in AI and computer vision, skilled at building and integrating real-time intelligent systems that solve real-world problems.
      </p>

      {/* Buttons */}
      <div className="z-10 flex flex-col sm:flex-row gap-4">
        <a 
          href="https://drive.google.com/uc?export=download&id=1abjyvyJ61YMfQ6gi9YoM3aVQVNKk7XVb" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-[#915EFF] hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded shadow">
            Download CV
          </button>
        </a>
        <a href="#contact">
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded shadow">
            Get In Touch
          </button>
        </a>
      </div>

      {/* Scroll animation */}
      <div className="z-10 absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 mt-4">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
