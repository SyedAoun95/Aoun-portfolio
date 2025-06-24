import { motion } from "framer-motion";
import { styles } from "../styles";


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center text-center px-4">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full border-4 border-[#915EFF] p-1 mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // 🔄 Replace with your own image later
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
        Syed <span className="text-[#915EFF]">Aoun Naqvi</span>
      </h1>

      {/* Subtitle */}
      <p className="text-white-100 text-lg sm:text-xl mb-4">
        Passionate Python Developer & AI Specialist
      </p>

      {/* Description */}
      <p className="text-gray-300 max-w-2xl text-sm sm:text-base mb-8">
        Expert in building AI solutions, machine learning models, and smart IoT systems that solve real business
        problems. Experienced in turning complex data into valuable insights through innovative AI tools.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#work">
          <button className="bg-[#915EFF] hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded shadow">
            View My Work
          </button>
        </a>
        <a href="#contact">
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded shadow">
            Get In Touch
          </button>
        </a>
      </div>

      {/* Scroll animation */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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
