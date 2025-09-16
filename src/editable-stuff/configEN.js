import '../i18n.js';
import { useTranslation } from "react-i18next";


// Navigation Bar SECTION
const navBarEN = {
  show: true,
};

// Main Body SECTION
const mainBodyEN = {
  gradientColors: "#4484ce, #1ad7c0, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Maxime",
  middleName: "",
  lastName: "Yonnet",
    message: "Machine Learning & Software Engineer (Python · Java · SQL) — fully remote, available now",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/DocR3D",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/docr3d/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/maxime-yonnet/",
    },
  ],
};

const aboutEN = {
  show: true,
  heading: "APropos.label",
  imageLink: require("../editable-stuff/maxime.jpg"),
  imageSize: 375,
  message: "Machine Learning & Software Engineer, MSc (UBO). 2 years fully remote (middleware & BSP - Groupe SEB). Currently seeking a role in ML/data or backend, available now.",
  resumeDev: require("../editable-stuff/cv_dev_fr.pdf"),
  resumeIa: require("../editable-stuff/cv_ia_en.pdf"),
  // fallback
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const reposEN = {
  show: false,
  heading: "Recent projects",
  gitHubUsername: "DocR3D", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["ClueDut", "Puissance4C", "ChessGameMinecraft", "AcheteTaBaguette"],
};

// Leadership SECTION
const leadershipEN = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  imagesEN: [
    { 
      img: require("../editable-stuff/maxime.jpg"),
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/maxime.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};


 const skillsEN = {
    show: true,
     heading: "Competences.label",
     machineLearning: [
        { name: "Python (ML)", value: 85 },
        { name: "SQL", value: 75 },
        { name: "scikit-learn", value: 70 },
        { name: "OpenCV", value: 70 },
    ],
    backendLogiciel: [
        { name: "Java", value: 90 },
        { name: "C", value: 75 },
        { name: "Bash", value: 70 },
        { name: "Golang", value: 60 },
        { name: "TCP/IP Sockets", value: 70 },
    ],
    systemesEmbarques: [
        { name: "MicroEJ", value: 70 },
        { name: "BSP / Low-level C", value: 75 },
    ],
    systemesExploitation: [
        { name: "Linux (daily use)", value: 85 },
        { name: "Windows", value: 70 },
    ],
    outilsGestion: [
        { name: "Docker", value: 80 },
        { name: "Git", value: 90 },
        { name: "UML", value: 80 },
        { name: "Agile methods", value: 80 },
        { name: "Jira / Confluence", value: 75 },
    ],
    savoirEtre: [
        { name: "Autonomy", value: 90 },
        { name: "Composure under pressure", value: 85 },
        { name: "Technical curiosity", value: 80 },
        { name: "Teamwork", value: 75 },
    ],
};
const parcoursEN = {
    show: true,
    heading: "Parcours.label", // mappé par i18n -> "Education"
    data: [
        // 2020–2022 - Degrees
        {
            name: "MSc in Computer Science - SIIA track",
            location: "Brest, France",
            desc: "MSc in Intelligent, Interactive and Autonomous Systems (UBO). Focus: ML, vision, optimization, embedded.",
            position: "left",
            date: "2020–2022",
            href: "https://www.univ-brest.fr/departement-informatique/fr/mentions-legales"
        },

        // 2021 - Projects
        {
            name: "Firearm detection in images",
            location: "",
            desc: "Supervised model (scikit-learn) to detect firearms; preprocessing and feature extraction with OpenCV.",
            position: "right",
            date: "2021",
            href: "https://www.youtube.com/watch?v=Xh3N65NMmyk&feature=youtu.be"
        },
        {
            name: "Robot navigation using fuzzy logic",
            location: "",
            desc: "Fuzzy-logic controller to reach a target while avoiding obstacles; rules, fuzzification/defuzzification.",
            position: "right",
            date: "2021",
            href: "/RapportLogiqueFloue.pdf"
        },
        {
            name: "TSP - immune-system-inspired heuristic",
            location: "",
            desc: "Bio-inspired approach to find a short tour visiting all points (Traveling Salesman Problem).",
            position: "right",
            date: "2021",
            href: "/RapportVoyageur.pdf"
        },
        {
            name: "Convex hull (parallel computing, PVM)",
            location: "",
            desc: "Upper convex hull with a master/worker architecture using PVM.",
            position: "right",
            date: "2021",
            href: "/RapportUH.pdf"
        },

        // 2019–2020 and earlier - Degrees
        {
            name: "BSc in Computer Science (Year 3)",
            location: "Brest, France",
            desc: "Algorithms, data structures, C/Java, networking (sockets), databases.",
            position: "left",
            date: "2019–2020",
            href: "https://www.univ-brest.fr/departement-informatique/fr/page/licence-informatique-3eme-annee-cdaii"
        },
        {
            name: "Computer Science CEGEP - exchange semester",
            location: "Matane, Quebec",
            desc: "Six-month exchange at Cégep de Matane.",
            position: "left",
            date: "Jan 2019 - Jun 2019",
            href: "https://www.cegep-matane.qc.ca/programmes/informatique/"
        },
        {
            name: "DUT in Computer Science (now BUT)",
            location: "Laval, France",
            desc: "Two-year university diploma: programming, networking, databases.",
            position: "left",
            date: "2017–2019",
            href: "https://iut-laval.univ-lemans.fr/fr/nos-formations/nos-diplomes/bachelor-universitaire-de-technologie.html"
        }
    ],
};
// GET IN TOUCH SECTION
const getInTouchEN = {
  show: true,
  heading: "The last word",
  message:
    "I am looking for a job in computer science in the field of machine learning, artificial intelligence, or data sciences in general. You can contact me here",
    email: "Yonnet.maxime@gmail.com",
};

const experiencesEN = {
  show: true,
  heading: "Experiences.label",
    data: [
        {
      role: "Middleware & BSP Developer (via Witekio/Avnet)",
      companylogo: require('../assets/img/groupeseb.jpg'),
      company: "Groupe SEB",
      date: "2023–2025, full remote",
      desc: "Maintained and enhanced the Touch product line (touchscreens). Developed a balance calibration system (BSP → Middleware → UI). Implemented automatic error reporting with logs and statistics. Collaborated with UI team, testers, and project manager on legacy code (Java 7). Ensured strict compliance with security, quality, and deadlines.",
      },
    {
      role: 'Remote Image Analysis Developer Internship',
      companylogo: require('../assets/img/cerema.png'),
      name: "Cerema",
      date: 'January 2020 – July 2020',
      desc: "During this internship, the public institution needed a tool to check the proper functioning of lighthouses using webcams placed on the coast. I used Python and openCV to create such a tool. To do this, every night, the software downloads a minute of video and then analyzes it to check the rhythm of the lighthouse. If the % of lighting of this one is not correct, then it is considered as faulty.",
      html: <div><br/> <p><a href="https://www.youtube.com/watch?v=HmIPkueeef0"> Operating example </a></p></div>,

    },
        {
            role: "President & Systems Administrator",
            companylogo: require('../assets/img/gglan.png'),
      name: 'GGLAN',
      date: "Jul 2017 - Jul 2025",
            desc: "Organized esports tournaments in Brest: Linux system and network administration, Docker-deployed Counter-Strike servers, live monitoring and incident response, team and logistics coordination.",
            html: <div><br /> <p><a href="https://GGLAN.fr"> Web Site </a> </p> <p><a href="https://www.facebook.com/GGLANBREST"> Page Facebook </a> </p> <p><a href="https://www.instagram.com/gglanbrest/?hl=fr"> Instagram </a> </p></div>,

        },
        {
            role: "Creator - Self-hosted media platform (side project)",
            company: "Home Media Stack",
            companylogo: require("../assets/img/media.png"),
            date: "2021 - present",
            desc: "Private hosting for personal photos/videos and open-licensed content (CC/public domain). Playback with Jellyfin, Nginx reverse proxy behind Cloudflare (TLS), MergeFS storage pooling, Docker/Portainer orchestration, cron jobs, monitoring. HTTPS everywhere (TLS, HSTS) - only ports 80/443 exposed - authenticated access. No content sources connected."        }
  ]
}

// Blog SECTION
 const blogEN = {
   show: true,
 };

export { navBarEN, mainBodyEN, aboutEN, reposEN, skillsEN, leadershipEN, getInTouchEN, experiencesEN, parcoursEN };
