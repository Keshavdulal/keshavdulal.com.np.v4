// Add your Portfolio Details here
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  fas,
  faAt,
  faArchive,
  faEnvelope,
  faHome,
  faCode,
  faChess,
  faIdCard,
  faHiking,
  // faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
library.add(fas, fab);

// todo migrate navconfig somewhere
const navConfig = [
  {
    name: "Home",
    faName: faHome,
    to: "/",
  },
  {
    name: "Experiences",
    faName: faHiking,
    // faName: faArchive,
    to: "/experiences",
  },
  {
    name: "Projects",
    faName: faCode,
    to: "/projects",
  },
  {
    name: "Contact",
    // faName: faAt,
    faName: faEnvelope,
    to: "/contact",
  },
  // {
  //   name: "Resume",
  //   faName: faPaperPlane,
  //   to: "https://bit.ly/3iKDOql",
  //   targetBlank: true,
  // },
];

const portfolio = {
  bio: {
    intro: "👋 Hi, My name is",
    firstName: "Keshav",
    lastName: "Dulal",
    outro: "Here are a few technologies I've been working with recently:",
    email: "keshav.dulal@gmail.com",
    professionTitle: "FullStack Software Engineer",
    location: "Kathmandu, Nepal",
    slogan: "Building web for the coming Generation 🚀",
    description: [
      "I am a FullStack Software Engineer who enjoys building things for web. I specialize in building Frontend of Web and Mobile applications, while I ocassionally dabblling around backend.",
      "I have experience in building Enterprise Applications in React & Node JS for American Health Care Companies & Educational Institutions. I enjoy working in a team and making innovative products.",
    ],
    interests: [
      "Photography",
      "Filmmaking",
      "Hiking",
      "Swimming",
      "Reading",
      "Playing Guitar",
      "Movies",
    ],
  },
  skillset: {
    core: [
      "React",
      "React Native",
      "Material-UI",
      "Node.JS",
      "JavaScript (ES6)",
      "HTML5",
      "CSS3",
    ],
    languages: [
      "JavaScript",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "C++",
      "C",
      "SQL",
    ],
    frameworks: [
      "React",
      "React Native",
      "Redux",
      "Material-UI",
      "Socket.io",
      "Gatsby",
      "D3",
      "jQuery",
      "Sass",
      "Node",
      "Express",
      "Mongoose",
      "Django",
    ],
    databases: ["PostGreSQL", "MySQL", "MongoDB"],
    learning: ["TypeScript", "GraphQL", "TailWind"],
    tools: [
      "ESlint",
      "Prettier",
      "Parcel",
      "Babel",
      "Webpack",
      "Bash",
      "Git",
      "Postman",
      "Jira",
    ],
  },
  education: {
    bachelors: {
      degree: "B.E. Computer Science Engineering",
      college: "Siddaganga Institute of Technology",
      location: "Tumkur, KA, India",
      duration: "4 Years",
      startEndPeriod: "MAY 2013 - MAY 2016",
    },
  },
  petProjects: [
    {
      name: "Kredit",
      description: "A Reddit Clone (Work in Progress)",
      technologies: [
        "React",
        "TypeScript",
        "GraphQL",
        "Apollo",
        "Node.js",
        "PostgreSQL",
        "MikroORM",
        "Redis",
        "Next.js",
        "TypeGraphQL",
        "Chakra",
      ],
      github: "https://github.com/Keshavdulal/kredit",
      // url: "https://keshavdulal.github.io/kredit/",
    },
    {
      name: "Spiral v0.1",
      description: "A Personal Thought Tracker",
      technologies: ["React", "Node", "Express", "Mongo"],
      github: "https://github.com/Keshavdulal/Spiral",
      url: "https://keshavdulal.github.io/Spiral/",
    },
    {
      name: "Adopt Me v0.1",
      description: "Find pets for adoption using Petfinder’s API",
      technologies: ["React"],
      github: "https://github.com/Keshavdulal/Adopt-Me",
      url: "https://adoptme2020.netlify.app/",
    },
    {
      name: "Keshavdulal.com.np v4.0",
      description: "4th Iteration of my Portfolio Site",
      technologies: ["React", "Gatsby", "GraphQL"],
      github: "https://github.com/Keshavdulal.com.np.v4",
      url: "https://keshavdulal.com.np",
    },
    {
      name: "Exercise Tracker 0.1",
      description: "Track exercise of multiple users",
      technologies: ["Mongo", "Express", "React", "Node"],
      github: "https://github.com/Keshavdulal/Exercise-tracker",
      url: "",
    },
    {
      name: "Retro v0.3",
      description: "Retro Games using Vanilla JS",
      technologies: ["Vanilla JS"],
      github: "https://github.com/Keshavdulal/Retro",
      url: "https://keshavdulal.github.io/Retro/",
    },
    {
      name: "2D Mapper",
      description: "2 Dimensional Mapping & Navigation Bot using Arduino",
      technologies: ["Arduino C"],
      github: "",
      url: "",
    },
  ],
  workExperiences: [
    // {
    //   position: "",
    //   company: "​",
    //   location: "",
    //   summary: "",
    //   duration: "",
    //   durationDetail: "",
    //   technologiesUsed: [],
    //   projects: [],
    //   github:"",
    //   responsibilities: [],
    // },
    {
      position: "Software Engineer",
      company: "Asterdio Inc",
      location: "Kathmanud, Nepal",
      summary: "Worked on a number of startup companies",
      duration: "2 Years",
      durationDetail: "SEPT 2018 - Present",
      technologiesUsed: [
        "React",
        "Redux",
        "Node",
        "Express",
        "PostGreSQL",
        // "Django",
        "Rest APIs",
      ],
      projects: [],
      // github: "",
      url: "https://asterdio.com/",
      responsibilities: ["Project Planning & Manangement", "Public Relations"],
    },
    // {
    //   position: "Digital Nomad",
    //   company: "​WAY360 Digital // @Nepal8thWonder // @VANA",
    //   location: "Kathmanud, Nepal",
    //   summary: "Worked on a number of startup companies",
    //   duration: "2 Years",
    //   durationDetail: "SEPT 2018 - SEPT 2020",
    //   technologiesUsed: ["FCPX", "PhotoShop", "LightRoom", "LRTimelapse"],
    //   projects: [],
    //   github: "https://github.com/Adventures-kd",
    //   url: "https://vana.com.np/",
    //   responsibilities: ["Project Planning & Manangement", "Public Relations"],
    // },
    {
      position: "Software Engineer",
      company: "​Leapfrog Technology Inc.",
      location: "Kathmanud, Nepal",
      summary:
        "Worked primarily on React Application Development with varying team sizes to build applications for American HealthCare Companies & Educational Institutions",
      duration: "2 Years",
      durationDetail: "SEPT 2016 - AUG 2018",
      technologiesUsed: [
        "React",
        "Redux",
        "Node",
        "Express",
        "PostGreSQL",
        "Django",
        "Rest APIs",
      ],
      github: "https://github.com/leapfrogtechnology",
      url: "https://www.lftechnology.com/",
      projects: [
        "Acustream Ingestion Engine",
        "Bartell Web App Revamp",
        "Eduphoric-Illuminate Server Data Synchronization",
      ],
      responsibilities: [
        "API Integration / Pagination / InfiniteScroll",
        "Searching / Sorting / Selecting / EditingLargeDataSets",
        "Dynamic Data Visualization",
        "FormHandling / Validation / Submission",
        "HIPPA Compliant Web App Development",
        "User Data Tracking, Customization & Management",
        "Delivery & Email Notification Services",
      ],
    },
    {
      position: "Android Intern",
      company: "​ ​Leapfrog Technology Inc.",
      location: "Kathmandu, Nepal",
      summary: "Developed Android Application",
      duration: "3 Months",
      durationDetail: "JUN 2016 - AUG 2016",
      technologiesUsed: ["Android Java", "Git", "Github"],
      github: "https://github.com/Gaune-bhyagutta/Awaz",
      url: "",
      projects: ["Awaz - Musical Instrument Tuner"],
      responsibilities: [
        "Developed Android App (AWAZ) to tune musical instruments",
        "Used Fast Fourier transform (FFT) Algorithm",
        "Worked on a team of 4 and No external libraries were used",
      ],
    },
    {
      position: "Visiting Faculty",
      company: "​Sagarmatha College of Science & Technology",
      location: "Kathmandu, Nepal",
      summary:
        "Taught Computer Networks & Network Security to Diploma & BSc.IT. Students",
      duration: "1 Year 6 Months",
      durationDetail: "FEB 2017 - JULY 2018",
      technologiesUsed: [
        "Computer Networks",
        "Managing Networks",
        "Network Security",
      ],
      github: "https://github.com/Keshavdulal/bscit-network-security-notes",
      url: "https://keshavdulal.github.io/bscit-network-security-notes/",
      projects: [""],
      responsibilities: [
        "Taught Computer Networks, Managing Networks & Network Security to Diploma Level for 3 semesters",
        "Taught Network Security to B.Sc.IT for a semester",
        "Project Mentor for Final Year B.Sc.IT Students",
      ],
    },
    {
      position: "Cyber Security Intern",
      company: "​Lucideus Tech",
      location: "New Delhi, India",
      summary: "",
      duration: "1 Month",
      durationDetail: "JUN 2014 - JUL 2014",
      technologiesUsed: ["BackTrack", "Kali", "Aircrack", "Nmap"],
      projects: [],
      github: "",
      url: "https://www.lucideus.com/",
      responsibilities: [
        "Selected for on-site summer internship as a finalist of Hack-x-ploit2013",
        "Trained on Cyber Security Practices, Penetration Testing, Network Security, Kali Linux and pitfalls of using of security tools",
      ],
    },
  ],
  socialMedia: [
    {
      name: "github",
      url: "https://github.com/keshavdulal",
      faName: ["fab", "github"],
    },
    {
      name: "stackOverFlow",
      url: "https://stackoverflow.com/users/3556531/keshavdulal",
      faName: ["fab", "stack-overflow"],
    },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/keshavdulal/",
      faName: ["fab", "linkedin"],
    },
    {
      name: "twitter",
      url: "https://twitter.com/keshavdulal",
      faName: ["fab", "twitter"],
    },
  ],
};

export { navConfig, portfolio };
