import '../i18n.js';
import { useTranslation } from "react-i18next";


// Navigation Bar SECTION
const navBarEN = {
  show: true,
};

// Main Body SECTION
const mainBodyEN = {
  gradientColors: "#4484ce, #1ad7c0, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yonnet",
  middleName: "",
  lastName: "Maxime",
  message: "Patient and autonomous, passionate about new technologies, always curious to learn.",
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
  message: "My name is Maxime Yonnet, student in computer science, recently graduated from a Master at the University of Western Brittany in the SIIA course (Intelligent, Interactive and Autonomous Systems). I am looking for a job in programming",
  resume: require("../editable-stuff/resume.pdf"),
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


// SKILLS SECTION
const skillsEN = {
  show: true,
  heading: "Competences.label",
  technologiesWeb: [
    { name: "HTML", value: 80 },
    { name: "CSS", value: 60 },
    { name: "PHP", value: 80 },
    { name: "Javascript", value: 70 },
    { name: "BootStrap", value: 80 },
    { name: "Laravel", value: 80 },
    { name: "CodeIgniter", value: 80 },
    { name: "React", value: 60 },
  ],
    bdd: [
    { name: "MySql", value: 90 },
    { name: "H2", value: 70 },
  ],
    programmation: [
    { name: "Java", value: 90 },
    { name: "C", value: 75 },
    { name: "C#", value: 75 },
    { name: "Python", value: 70 },
    { name: "Bash", value: 70 },
    { name: "Golang", value: 60 },
    { name: "Q#", value: 40 },
    { name: "XML", value: 65 },
    { name: "Socket", value: 70 },
  ],
    systemesExploitation: [
    { name: "Windows", value: 70 },
    { name: "Linux", value: 80 },
    { name: "Android", value: 60 },
  ],
      gestionProjet: [
    { name: "GIT", value: 90 },
    { name: "UML", value: 80 },
    { name: "Agile methods", value: 80 },
  ],
        savoirEtre: [
    { name: "Patient", value: 80 },
    { name: "Self-taught", value: 80 },
    { name: "Working under pressure", value: 80 },
  ],
};

const parcoursEN = {
  show: true,
  heading: "Parcours.label",
  data: [
  {
    name: "Master in Computer Science",
    location: "Brest, France", 
    desc:"Master in computer science in SIIA, at the UBO of brest" , 
    position: "left" , date:" 2020 - 2022" , 
    href: "https://www.univ-brest.fr/departement-informatique/menu/Master+Informatique/Parcours-SIIA"
  },
  {
    name: "Creation of an artificial intelligence",
    location: "", 
    desc:"Creation of an artificial intelligence with the goal of getting from point A to point B while dodging obstacles. Done using fuzzy logic." , 
    position: "right" , date:" 2021" , 
    href: "/home/RapportLogiqueFloue.pdf"
  },
  {
    name: "Creation of a deep search algorithm for the traveler problem",
    location: "", 
    desc:"Creation of an algorithm to find the shortest path through all the points. The algorithm uses the logic set up by the immune system." , 
    position: "right" , date:" 2021" , 
    href: "/home/RapportVoyageur.pdf"
  },
  {
    name: "Creation of an algorithm for computing upper convex envelope",
    location: "", 
    desc:"Created an algorithm to find the smallest possible surface that contains the most points using parallel programming." , 
    position: "right" , date:" 2021" , 
    href: "/home/RapportUH.pdf"
  },

    {
    name: "Bachelor's Degree in Computer Science",
    location: "Brest, France", 
    desc:"Bachelor's degree in computer science, at the UBO in Brest" , 
    position: "left" , date:" 2019 - 2020" , 
    href: "https://www.univ-brest.fr/departement-informatique/menu/Licence+informatique/3eme-annee-apres-un-Bac---2"
  },
  {
    name: "Fake Creation of a sales website",
    location: "", 
    desc:"Creation of a website for selling goodies using CodeIgniter." , 
    position: "right" , date:" 2019" , 
    href: "https://imgur.com/a/VukyYex"
  },
    {
    name: "Creation of a Power 4",
    location: "", 
    desc:"Creation of a power 4 game playable on a network using the C language, sockets and TKinter." , 
    position: "right" , date:" 2019" , 
    href: "/home/RapportPuissance4.pdf"
  },
  {
    name: "Computer Science in Cegep",
    location: "Matane, Quebec", 
    desc:"Six months at the Matane CEGEP in Quebec" , 
    position: "left" , date:" January 2019 - June 2019" , 
    href: "https://www.cegep-matane.qc.ca/programmes/informatique/"
  },
    {
    name: "Fake Creation of a sales website",
    location: "", 
    desc:"Création d'un site web de vente de produit de boulangerie en utilisant uniquement PHP." , 
    position: "right" , date:" 2019" , 
    href: "https://github.com/DocR3D/AcheteTaBaguette"
  },
    {
    name: "Computer Science DUT (now called BUT)",
    location: "Laval, France", 
    desc:"Two year university degree in computer science" , 
    position: "left" , date:" September 2017 - June 2019" , 
    href: "https://iut-laval.univ-lemans.fr/fr/nos-formations/nos-diplomes/bachelor-universitaire-de-technologie.html"
  },
  {
    name: "Creating a quizz game in Java",
    location: "", 
    desc:"Creation of a point and click quiz game in Java using agile methods" , 
    position: "right" , date:" 2018" , 
    href: "/home/RapportQuizz.pdf"
  },
  {
    name: "Creation of a website responding to a challenge",
    location: "", 
    desc:"Creation of a website answering the challenges of Codity for the night of the information edition 2017" , 
    position: "right" , date:" 2017" , 
    href: "https://github.com/DocR3D/KonamicodeIntouchable"
  },
  {
    name: "Realization of the first GG-Lan",
    location: "Brest, France", 
    desc:"Organization of the first video game tournament made by GG-Lan" , 
    position: "right" , date:" 2016" , 
    href: "https://www.facebook.com/GGLANBREST/photos/?ref=page_internal&tab=album"
  },
  {
    name: "Participation in the Little Hackers",
    location: "Brest, France", 
    desc:"Participation in the first 3 years of the Little Hackers training" , 
    position: "left" , date:" September 2011 - June 2014" , 
    href: "https://www.a-brest.net/article13204.html"
  },
  ],
};

// GET IN TOUCH SECTION
const getInTouchEN = {
  show: true,
  heading: "The last word",
  message:
    "I am looking for a job in computer science in the field of machine learning, artificial intelligence, or data sciences in general. You can contact me here",
  email: "Yonnet.maxime@gglan.fr",
};

const experiencesEN = {
  show: true,
  heading: "Experiences.label",
  data: [
      {
      role: 'Internship in VR experience creation',
      companylogo: require('../assets/img/aktan.jpg'),
      name: "University of Western Brittany",
      date: 'January 2022 – July 2022',
      desc: "During this training course, I discovered the different tools allowing to host a VR tool and I discovered the tool allowing to create a space on these tools. I summarized all my knowledge in a french report that you can find here : ",
      html: <div><br/> <p><a href="/home/RapportExperienceVR.pdf"> Internship Report</a></p></div>,

    },
    {
      role: 'Research time in quantum computing',
      companylogo: require('../assets/img/ubo.png'),
      name: "University of Western Brittany",
      date: 'Avril 2021 – June 2021',
      desc: "During this Laboratory Welcome Time, I discovered quantum computing, I could then summarize all my knowledge in a frennch report that you can find here :",
      html: <div><br/> <p><a href="/home/RapportQuantique.pdf"> Internship report</a></p></div>,
    },
    {
      role: 'Image Analysis Developer',
      companylogo: require('../assets/img/cerema.png'),
      name: "Cerema",
      date: 'January 2020 – July 2020',
      desc: "During this internship, the public institution needed a tool to check the proper functioning of lighthouses using webcams placed on the coast. I used Python and openCV to create such a tool. To do this, every night, the software downloads a minute of video and then analyzes it to check the rhythm of the lighthouse. If the % of lighting of this one is not correct, then it is considered as faulty.",
      html: <div><br/> <p><a href="https://www.youtube.com/watch?v=HmIPkueeef0"> Operating example </a></p></div>,

    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/bourrasque.png'),
      name: "Bourrasque",
      date: 'January 2019 – July 2019',
      desc: 'Creation of a calendar allowing practitioners to manage their schedule, go on vacation and clients to make appointments.',
      html: <div><br/> <p><a href="/home/RapportBourrasque.pdf"> Internship report</a></p></div>,
    },
        {
      role: 'President of an association',
      companylogo: require('../assets/img/gglan.png'),
      name: 'GGLAN',
      date: 'juillet 2017 – July 2020',
      desc: 'GoodGame-Lan is an association created by several of my friends and myself. Its goal is to facilitate the creation of video game tournaments in the city of Brest. To do so, we organize different tournaments at different school vacations. I was president the first 3 years of the association and I am now Treasurer.',
      html: <div><br/> <p><a href="https://GGLAN.fr"> Web Site </a> </p> <p><a href="https://www.facebook.com/GGLANBREST"> Page Facebook </a> </p> <p><a href="https://www.instagram.com/gglanbrest/?hl=fr"> Instagram </a> </p></div>,

    },
  ]
}

// Blog SECTION
 const blogEN = {
   show: true,
 };

export { navBarEN, mainBodyEN, aboutEN, reposEN, skillsEN, leadershipEN, getInTouchEN, experiencesEN, parcoursEN };
