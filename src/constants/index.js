import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
Styletech,
  jobit,
  tripguide,
  threejs,
  Deepfake,
  Styletechhome,
  Fiverr,
  Linkedin,
  Upwork,
  Sensiview,
  Seat,
  cash,
  sensiview1,
  chat,
  About,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: " Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Ai/ML ",
    icon: backend,
  },
  {
    title: "Computer vision Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Fiver",
    icon: Fiverr,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with clinets form all accross the world developing scaleable web applications .",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Full Stack Developer",
  company_name: "Freelance - StyleTech Glass Company",
 icon:Linkedin, // Replace with your actual icon or a placeholder
  iconBg: "#383E56",
  date: "  Jul 2025",
  points: [
    "Developed and deployed a professional website for a glass company using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    "Worked closely with the client to gather requirements and deliver a tailored solution that met business objectives and branding needs.",
    "Implemented responsive design using Tailwind CSS and ensured cross-browser compatibility and SEO optimization.",
    "Deployed the site on Hostinger with a custom domain, configured hosting and DNS, and ensured production readiness.",
    "Gained hands-on experience in full-cycle development including planning, design, coding, deployment, and client feedback integration.",
  ],
},

  {
    title: "AI/ML Web Developer",
    company_name: "Upwork",
    icon: Upwork,
    iconBg: "#E6DEDD",
    date: " july 2025",
    points: [
        "Built a deepfake image detection website using a custom-trained Xception model and FastAPI for backend integration.",
    "Collected and processed datasets for model training and implemented real-time prediction APIs.",
    "Developed a responsive frontend in React.js with Tailwind CSS and delivered the complete solution to the client.",

    ],
  },
  {
    title: "Frontend Developer (React.js & Tailwind CSS)",
    company_name: "Freelance/Portfolio Projects",
    icon: Fiverr,
    iconBg: "#383E56",
    date: "Aug 2024",
    points: [
      "Developed responsive, component-based UIs using React, Tailwind CSS, and Vite.",
      "Integrated third-party libraries such as Email.js, Framer Motion, and Lucide React.",
      "Ensured cross-browser compatibility, accessibility, and mobile responsiveness.",
      "Deployed apps on Vercel and Netlify, optimizing for performance and SEO.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: " Linkedin-Freelance",
    icon: Linkedin ,
    iconBg: "#E6DEDD",
    date: "Jan 2025",
    points: [
      "Developed Sensiview, a mobile app for visually impaired users using React Native and Django backend.",
    "Implemented real-time features like cash detection, seat detection, and object recognition using YOLO.",
    "Ensured responsive UI, voice feedback, and accessibility across Android devices.",
    "Delivered a full-stack mobile solution combining AI-powered detection with seamless user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aoun proved me wrong.",
    name: "Julie",
    designation: "CFO",
    company: "Inspire Tech",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "It was great working with Aoun, so easy to communicate and collaborate",
    name: "Faizan Ahmad",
    designation: "CEO",
    company: "Styletech windows",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aoun optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Arfa imtiaz",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Styletech glass website",
    description:
      "Web-based platform Enables the user to look view items ,add to cart , send emails and Book a call",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Email.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Styletechhome,
    source_code_link: "https://www.styletechwin.info/",
  },
  {
    name: "Deepfake image detection website",
    description:
      "Website that enables the users to upload any image , detect the image and shows the result",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Fast api",
        color: "green-text-gradient",
      },
      {
        name: "Xception.net",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: Deepfake,
    source_code_link: "https://deep-fake-image-detection-web.vercel.app/",
  },
  {
    name: "Sensiview_computer vsision",
    description:
      "A comprehensive app that is built with react Native which helps the viusally impaired peoples in differnet object detection in real-time",
    tags: [
      {
        name: "React native",
        color: "blue-text-gradient",
      },
      {
        name: "Python(Django)",
        color: "green-text-gradient",
      },
      {
        name: "Yolo V8",
        color: "pink-text-gradient",
      },
        {
        name: "SQl lite",
        color: "pink-text-gradient",
      },
    ],
    image: sensiview1,
    source_code_link: "https://github.com/SyedAoun95?tab=repositories",
  },

  {
    name: "Seat detection-computer vision",
    description:
      "A scalable and secure backend for a real-time chat application. Built with Node.js, Express, MongoDB, and Socket.IO for instant messaging. Features user authentication, private/public chat, and message persistence.",
    tags: [
      {
        name: "Yolo V8",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Roboflow",
        color: "pink-text-gradient",
      },
        {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: Seat,
    source_code_link: "https://github.com/SyedAoun95?tab=repositories",
  },
  {
    name: "Cash Detection_computer vsision",
    description:
      "Trained the yolo v8l model for real time cash detection then fine tuned the model for 91 percent accuracy and integration APi built for the app or web integration of model",
    tags: [
      {
        name: "Yolo V8l",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Roboflow",
        color: "pink-text-gradient",
      },
        {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: cash,
    source_code_link: "https://github.com/SyedAoun95?tab=repositories/",
  },
  {
    name: "chattApp-NodeBackend",
    description:
      "A scalable and secure backend for a real-time chat application. Built with Node.js, Express, MongoDB, and Socket.IO for instant messaging. Features user authentication, private/public chat, and message persistence.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Mongo",
        color: "pink-text-gradient",
      },
        {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/SyedAoun95?tab=repositories",
  },
  
  
  
];

export { services, technologies, experiences, testimonials, projects };
