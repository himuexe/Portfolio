import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of college experience, I have honed my skills in front-end technologies like React as well as back-end technologies like  MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of college experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Lead -WEB/APP Dev",
    company: " ACM SIGKDD",
    description: `Lead in the ACM SIGKDD developing and maintaining web applications using JavaScript, React.js, and Tailwind CSS.`,
    technologies: ["Javascript", "React.js", "Tailwind CSS", "Typecript"],
  } 
];

export const PROJECTS = [
  {
    title: "Vacays.com",
    image: project1,
    description:
      "A fully functional Hotel Booking website with features like sorting, searching, and user authentication.",
    technologies: ["Tailwind", "Typescript", "Vite", "Node.js", "MongoDB","Express.js"],
  },
  {
    title: "Dhabha.com",
    image: project2,
    description:
      "A Fullstack application for managing restaurants, sorting , searching and user authentication",
    technologies: ["Tailwind", "Typescript", "Vite", "Node.js", "MongoDB","Express.js","Auth0"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Framer", "Tailwind", "React", "Vite"],
  },
  {
    title: "University Management",
    image: project4,
    description:
      "A platform for managing the database for a University",
    technologies: ["Tailwind", "Typescript", "Vite", "Node.js", "MongoDB","Express.js","Shadcn-ui"],
  },
];

export const CONTACT = {
  address: "60/154 Heera Path , Mansarovar , Jaipur ",
  phoneNo: "+91 9828477222",
  email: "sharmaslov@gmail.com",
};
