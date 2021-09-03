// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yonnet",
  middleName: "",
  lastName: "Maxime",
  message: "Patient et autonome, passionné de nouvelles technologies, toujours curieux d’apprendre.",
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

const about = {
  show: true,
  heading: "A propos",
  imageLink: require("../editable-stuff/maxime.jpg"),
  imageSize: 375,
  message:
    "Je m'appelle Maxime Yonnet, Etudiant en informatique, Je suis actuellement en Master à l'Université de Bretagne Occidentale dans le cursus SIIA (Systèmes Intelligents, Interactifs et Autonomes).",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Projets récents",
  gitHubUsername: "DocR3D", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["ClueDut", "Puissance4C", "ChessGameMinecraft", "AcheteTaBaguette"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
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
const skills = {
  show: true,
  heading: "Compétences",
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
    { name: "Java", value: 100 },
    { name: "C", value: 75 },
    { name: "Python", value: 70 },
    { name: "Bash", value: 70 },
    { name: "Golang", value: 70 },
    { name: "Q#", value: 60 },
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
    { name: "Méthodes agiles", value: 80 },
  ],
        savoirEtre: [
    { name: "Patient", value: 100 },
    { name: "Auto didacte", value: 100 },
    { name: "Sait travailler sous la pression", value: 100 },
  ],
};

const parcours = {
  show: true,
  heading: "Mon parcours",
  data: [
  {
    name: "Master Informatique",
    location: "Brest, France", 
    desc:"Master informatique en SIIA, à l'ubo de brest" , 
    position: "left" , date:" 2020 - Maintenant" , 
    href: "https://www.google.fr"
  },
      {
    name: "Creation d'une intélligence artificielle",
    location: "", 
    desc:"Création d'une intélligence artificielle dans le but d'aller d'un point A à un point B en esquivant les obstacles. Fait en utilisant la logique floue." , 
    position: "right" , date:" 2021" , 
    href: "https://www.google.fr"
  },

    {
    name: "Licence Informatique",
    location: "Brest, France", 
    desc:"Licence d'informatique, à l'ubo de brest" , 
    position: "left" , date:" 2019 - 2020" , 
    href: "https://www.google.fr"
  },
  {
    name: "Creation d'un site web de vente",
    location: "", 
    desc:"Création d'un site web de vente de goodies en utilisant CodeIgniter." , 
    position: "right" , date:" 2019" , 
    href: "https://www.google.fr"
  },
    {
    name: "Creation d'un Puissance 4",
    location: "", 
    desc:"Création d'un jeu puissance 4 jouable en réseau en utilisant le langue C, les sockets et TKinter." , 
    position: "right" , date:" 2019" , 
    href: "https://www.google.fr"
  },
  {
    name: "Cégèp d'informatique",
    location: "Matane, Quebec", 
    desc:"Six mois au cégèp de Matane" , 
    position: "left" , date:" Janvier 2019 - Juin 2019" , 
    href: "https://www.google.fr"
  },
    {
    name: "Creation d'un site web de vente",
    location: "", 
    desc:"Création d'un site web de vente de produit de boulangerie en utilisant uniquement PHP." , 
    position: "right" , date:" 2019" , 
    href: "https://www.google.fr"
  },
    {
    name: "DUT informatique",
    location: "Laval, France", 
    desc:"Dut informatique" , 
    position: "left" , date:" Septembre 2017 - Juin 2019" , 
    href: "https://www.google.fr"
  },
      {
    name: "Creation d'un jeu Cluedo pour Mobile",
    location: "", 
    desc:"Création d'un site web de vente de produit de boulangerie en utilisant uniquement PHP." , 
    position: "right" , date:" 2019" , 
    href: "https://www.google.fr"
  },
        {
    name: "Creation d'un jeu en Java",
    location: "", 
    desc:"Création d'un Jeu quizz point and click en Java en utilisant les méthodes agiles" , 
    position: "right" , date:" 2019" , 
    href: "https://www.google.fr"
  },
          {
    name: "Creation d'un site web répondant à un défis",
    location: "", 
    desc:"Création d'un Site web répondant au défis de la nuit de l'info." , 
    position: "right" , date:" 2019" , 
    href: "https://www.google.fr"
  },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Le mot de la fin",
  message:
    "Je suis à la recherche d'une opportunité de stage en informartique dans le domaine du machine learning, intelligence artificielle, ou de data sciences en général. Vous pouvez me contacter ici",
  email: "Yonnet.maxime@gglan.fr",
};

const experiences = {
  show: true,
  heading: "Expérience",
  data: [
    {
      role: 'TAL en informatique quantique',// Here Add Company Name
      companylogo: require('../assets/img/ubo.png'),
      name: "Université de bretagne Occidentale",
      date: 'Avril 2021 – Juin 2021',
      desc: 'TBD',
    },
    {
      role: 'Developpeur en analyse image',
      companylogo: require('../assets/img/cerema.png'),
      name: "Cerema",
      date: 'Janvier 2020 – Juillet 2020',
      desc: 'TBD',
    },
    {
      role: 'Developpeur Web',
      companylogo: require('../assets/img/bourrasque.png'),
      name: "Bourrasque",
      date: 'Janvier 2020 – Juillet 2020',
      desc: 'TBD',
    },
        {
      role: 'Président d\'association',
      companylogo: require('../assets/img/gglan.png'),
      name: 'GGLAN',
      date: 'juillet 2017 – Juillet 2020',
      desc: 'TBD',
    },
  ]
}

// Blog SECTION
 const blog = {
   show: true,
 };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, parcours };
