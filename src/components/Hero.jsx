import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full border-4 border-blue-400 p-1 mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // 🔄 Replace with your image latera
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Name */}
      <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
        Muhammad <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Anique</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg sm:text-xl mb-4">
        Passionate Python Developer & AI Specialist
      </p>

      {/* Description */}
      <p className="text-gray-400 max-w-2xl text-sm sm:text-base mb-8">
        Expert in building AI solutions, machine learning models, and smart IoT systems that solve real business problems.
        Experienced in turning complex data into valuable insights through innovative AI tools.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#work">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow">
            View My Work
          </button>
        </a>
        <a href="#contact">
          <button className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded shadow">
            Get In Touch
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
