/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Edsel Ayala",
  firstName: "Edsel",
  lastName: "Ayala",
  title: "Hi, I'm Edsel Ayala",
  subTitle: "A passionate Senior Software Engineer with 6 years of experience building scalable and responsive web applications using Vue.js, React.js, JavaScript, and modern front-end frameworks—along with hands-on experience in PHP, Laravel, Node.js, and other powerful tools and libraries.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/ayalaedsel/",
  gmail: "ayalaedsel@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/AyalaEdsel",
  medium: "",
  stackoverflow: "",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "DEDICATED FRONTEND ENGINEER WHO BUILDS FAST, SCALABLE, AND ACCESSIBLE WEB APPS",
  skills: [
    emoji("⚡ Develop highly interactive and modular front-end interfaces using Vue.js (2/3), Vuex, and Composition API"),
    emoji("⚡ Build Progressive Web Applications (PWA) with both traditional and SPA architectures"),
    emoji("⚡ Implement responsive, cross-browser compatible UI using Tailwind CSS, Vuetify, and other UI frameworks"),
    emoji("⚡ Integrate third-party services such as Firebase, AWS, RESTful APIs, etc."),
    emoji("⚡ Use modern tooling like Vite, Webpack, Babel, Git, and Chrome DevTools for debugging and development"),
    emoji("⚡ Collaborate remotely with teams using tools like Jira, Slack, Trello, and GitHub/GitLab"),
    emoji("⚡ Backend integration experience using PHP, Laravel, Node.js, and MySQL for full-stack solutions")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SCSS / SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript (ES6+)",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Vue.js 2 / 3",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Webpack",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "Axios",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "PWA",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "RESTful API",
      fontAwesomeClassname: "fas fa-exchange-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Southern Luzon State University",
      logo: require("./assets/images/slsuLogo.png"), // Replace with your actual logo path or update accordingly
      subHeader: "Bachelor of Science in Electronics and Communications Engineering",
      duration: "2012 - 2017",
      desc: "Passed the Electronics Engineer and Electronics Technician Licensure Examinations in 2017.",
      descBullets: [
        "Strong foundation in electronics, communication systems, and engineering principles",
        "Transitioned into software development with a focus on front-end engineering and scalable web apps"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
        {
      role: "Process Engineer",
      company: "Amkor Technology",
      companylogo: require("./assets/images/amkorLogo.png"),
      date: "2018 – 2019",
      desc: "Led engineering improvements in a high-volume semiconductor manufacturing environment.",
      descBullets: [
        "Implemented process optimizations to reduce downtime and improve yield",
        "Performed root cause analysis and cross-functional issue resolution",
        "Collaborated with cross-department teams on process audits"
      ]
    },
        {
      role: "Full-stack Web Developer",
      company: "CCK City Network",
      companylogo: require("./assets/images/cckLogo.jpg"),
      date: "2019 – 2020",
      desc: "Delivered end-to-end solutions using modern JavaScript frameworks for front-end and PHP for backend.",
      descBullets: [
        "Created business tools for data tracking and internal operations",
        "Handled full project lifecycle from requirements analysis to deployment",
        "Ensured cross-browser compatibility and responsive design"
      ]
    },
        {
      role: "Front-End Web Developer (Remote)",
      company: "My Internet Support",
      companylogo: require("./assets/images/misLogo.jpg"),
      date: "2020 – 2024",
      desc: "Worked remotely as a front-end developer, enhancing web-based systems for property management and customer support.",
      descBullets: [
        "Built and maintained internal tools to support service operations and technical teams",
        "Developed user-facing portals to improve end-user experience and workflow efficiency",
        "Collaborated with remote teams to streamline operations"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Yondu, Inc.",
      companylogo: require("./assets/images/yonduLogo.jpg"),
      date: "2020 – Present",
      desc: "Promoted to Senior Software Engineer and served as Vue.js Subject Matter Expert. Led front-end development on large-scale and high-impact digital platforms.",
      descBullets: [
        "Developed real-time dashboards and internal tools used by thousands of users nationwide",
        "Built scalable platforms supporting government compliance and enterprise operations",
        "Recognized with multiple company awards for performance and innovation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Only personal projects are shown. Projects developed for private companies are not displayed due to Non-Disclosure Agreements (NDAs).",
  projects: [
    {
      image: require("./assets/images/makataLogo.png"),
      projectName: "Makata Portal",
      projectDesc: "Makata Portal is a student points tracking system used in Pagbilao National High School. It supports a teacher’s positive reinforcement strategy by awarding stars to students for classroom participation. Teachers scan student QR codes to give stars, and students are ranked based on total stars. The platform includes a student portal for monitoring points and a teacher portal for managing sections and student records.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://makata-portal.netlify.app/"
        },
        {
          name: "Screenshots",
          url: "https://drive.google.com/drive/folders/1jGu81uuaVDmNztr9r0yHXUj2a-GJe5nm?usp=sharing"
        }
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Mythspace",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Download APK",
    //       url: "https://drive.google.com/file/d/11BJPgoD4UgjHphFET8qq3K4I0woqipuF/view?usp=sharing"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Alibaba Cloud Fundamental Training",
      subtitle: "Completed core training on cloud computing concepts and Alibaba Cloud services",
      image: require("./assets/images/alibabaCloudAcademy.png"),
      imageAlt: "Alibaba Cloud",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1YmwPCNnZyxT0W5dLaD8KJudlCwrHfXkI/view?usp=sharing"
        }
      ]
    },
    {
      title: "MVP Spot Award (Yondu - Q1 2025)",
      subtitle:
        "Developed quantifiable process improvement or exceeded expectations on implementing successful projects, events, and programs that had a lasting impact on a BU level.",
      image: require("./assets/images/mvpSpotAward.png"),
      imageAlt: "MVP Spot Award",
      footerLink: [
      ]
    },
    {
      title: "Customer's Choice (Yondu - Q2 2025)",
      subtitle: "Exemplified the ability to make customers and their needs a primary focus of one’s actions; developing and sustaining productive customer relationships.",
      image: require("./assets/images/customerChoiceAward.png"),
      imageAlt: "Customer's Choice",
      footerLink: [
      ]
    },
    {
      title: "Customer's Choice (Yondu - Q2 2024)",
      subtitle: "Exemplified the ability to make customers and their needs a primary focus of one’s actions; developing and sustaining productive customer relationships.",
      image: require("./assets/images/customerChoiceAward.png"),
      imageAlt: "Customer's Choice",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63 945 629 7473",
  email_address: "ayalaedsel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ayalaedsel", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
