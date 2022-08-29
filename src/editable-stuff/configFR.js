import '../i18n.js';
import { useTranslation } from "react-i18next";


// Navigation Bar SECTION
const navBarFR = {
  show: true,
};

// Main Body SECTION
const mainBodyFR = {
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

const aboutFR = {
  show: true,
  heading: "APropos.label",
  imageLink: require("../editable-stuff/maxime.jpg"),
  imageSize: 375,
  message: "Je m'appelle Maxime Yonnet, Etudiant en informatique, récemment diplomé d'un Master à l'Université de Bretagne Occidentale dans le cursus SIIA (Systèmes Intelligents, Interactifs et Autonomes). Je suis à la recherche d'un emploi en télétravail dans la Data Science ou le développement d'application.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const reposFR = {
  show: false,
  heading: "Projets récents",
  gitHubUsername: "DocR3D", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: ["ClueDut", "Puissance4C", "ChessGameMinecraft", "AcheteTaBaguette"],
};

// Leadership SECTION
const leadershipFR = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  imagesFR: [
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
const skillsFR = {
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
    { name: "Méthodes agiles", value: 80 },
  ],
        savoirEtre: [
    { name: "Patient", value: 80 },
    { name: "Auto didacte", value: 80 },
    { name: "Travailler sous la pression", value: 80 },
  ],
};

const parcoursFR = {
  show: true,
  heading: "Parcours.label",
  data: [
  {
    name: "Master Informatique",
    location: "Brest, France", 
    desc:"Master informatique en SIIA, à l'ubo de brest" , 
    position: "left" , date:" 2020 - 2022" , 
    href: "https://www.univ-brest.fr/departement-informatique/menu/Master+Informatique/Parcours-SIIA"
  },
  {
    name: "Creation d'une intélligence artificielle",
    location: "", 
    desc:"Création d'une intélligence artificielle dans le but d'aller d'un point A à un point B en esquivant les obstacles. Fait en utilisant la logique floue." , 
    position: "right" , date:" 2021" , 
    href: "/RapportLogiqueFloue.pdf"
  },
  {
    name: "Creation d'un algorithme de recherche en profondeur pour le problème du voyageur",
    location: "", 
    desc:"Création d'un algorithme permettant de trouver le chemin le plus cours en passant par tout les points. L'algorithme utilise la logique mise en place par le système immunitaire." , 
    position: "right" , date:" 2021" , 
    href: "/RapportVoyageur.pdf"
  },
  {
    name: "Creation d'un algorithme de calcul d'enveloppe convexe superieur",
    location: "", 
    desc:"Création d'un algorithme permettant de trouver la surface la plus petite possible qui contient le plus de points possible en utilisant la programmation parallele." , 
    position: "right" , date:" 2021" , 
    href: "/RapportUH.pdf"
  },

    {
    name: "Licence Informatique",
    location: "Brest, France", 
    desc:"Licence d'informatique, à l'ubo de brest" , 
    position: "left" , date:" 2019 - 2020" , 
    href: "https://www.univ-brest.fr/departement-informatique/menu/Licence+informatique/3eme-annee-apres-un-Bac---2"
  },
  {
    name: "Creation d'un site web de vente",
    location: "", 
    desc:"Création d'un site web de vente de goodies en utilisant CodeIgniter." , 
    position: "right" , date:" 2019" , 
    href: "https://imgur.com/a/VukyYex"
  },
    {
    name: "Creation d'un Puissance 4",
    location: "", 
    desc:"Création d'un jeu puissance 4 jouable en réseau en utilisant le langue C, les sockets et TKinter." , 
    position: "right" , date:" 2019" , 
    href: "/RapportPuissance4.pdf"
  },
  {
    name: "Cégèp d'informatique",
    location: "Matane, Quebec", 
    desc:"Six mois au cégèp de Matane au Québec" , 
    position: "left" , date:" Janvier 2019 - Juin 2019" , 
    href: "https://www.cegep-matane.qc.ca/programmes/informatique/"
  },
    {
    name: "Creation d'un site web de vente",
    location: "", 
    desc:"Création d'un site web de vente de produit de boulangerie en utilisant uniquement PHP." , 
    position: "right" , date:" 2019" , 
    href: "https://github.com/DocR3D/AcheteTaBaguette"
  },
    {
    name: "DUT informatique (désormais BUT)",
    location: "Laval, France", 
    desc:"Diplome universitaire d'une durée de deux ans en informatique" , 
    position: "left" , date:" Septembre 2017 - Juin 2019" , 
    href: "https://iut-laval.univ-lemans.fr/fr/nos-formations/nos-diplomes/bachelor-universitaire-de-technologie.html"
  },
  {
    name: "Creation d'un jeu en Java",
    location: "", 
    desc:"Création d'un Jeu quizz point and click en Java en utilisant les méthodes agiles" , 
    position: "right" , date:" 2018" , 
    href: "/RapportQuizz.pdf"
  },
  {
    name: "Creation d'un site web répondant à un défis",
    location: "", 
    desc:"Création d'un Site web répondant au défis de Codity pour la nuit de l'info edition 2017" , 
    position: "right" , date:" 2017" , 
    href: "https://github.com/DocR3D/KonamicodeIntouchable"
  },
  {
    name: "Réalisation de la première GG-Lan",
    location: "Brest, France", 
    desc:"Organisation du premier tournois de JeuxVidéo fait par GG-Lan" , 
    position: "right" , date:" 2016" , 
    href: "https://www.facebook.com/GGLANBREST/photos/?ref=page_internal&tab=album"
  },
  {
    name: "Participation aux Petits Hackers",
    location: "Brest, France", 
    desc:"Participation aux 3 premières années de la formation des petits Hackers" , 
    position: "left" , date:" Septembre 2011 - Juin 2014" , 
    href: "https://www.a-brest.net/article13204.html"
  },
  ],
};

// GET IN TOUCH SECTION
const getInTouchFR = {
  show: true,
  heading: "Le mot de la fin",
  message:
    "Je suis à la recherche d'un emploi en informatique dans le domaine du machine learning, intelligence artificielle, ou de data sciences en général. Vous pouvez me contacter ici",
  email: "Yonnet.maxime@gglan.fr",
};

const experiencesFR = {
  show: true,
  heading: "Experiences.label",
  data: [
      {
      role: 'Stage en télétravail dans le domaine de la création d\'experience VR',
      companylogo: require('../assets/img/aktan.jpg'),
      name: "Université de Bretagne Occidentale",
      date: 'Janvier 2022 – Juillet 2022',
      desc: "Lors de ce stage, j'ai découvert les différents outils permettant d'heberger un outil VR et j'ai découvert l'outil permettant de créer un espace sur ces outils. J'ai résumé tout mon savoir dans un rapport que vous pouvez retrouver ici : ",
      html: <div><br/> <p><a href="/RapportExperienceVR.pdf"> Rapport de Stage</a></p></div>,

    },
    {
      role: 'TAL en télétravail dans le domaine de l\'informatique quantique',
      companylogo: require('../assets/img/ubo.png'),
      name: "Université de bretagne Occidentale",
      date: 'Avril 2021 – Juin 2021',
      desc: "Lors de ce Temps d'Accueil en Laboratoire, j'ai découvert l'informatique quantique, j'ai pu alors résumer tout mon savoir dans un rapport que vous pouvez retrouver ici :",
      html: <div><br/> <p><a href="/RapportQuantique.pdf"> Rapport de TAL</a></p></div>,
    },
    {
      role: 'Stage en télétravail dans le developpement de solution d\'analyse d\'image vidéo',
      companylogo: require('../assets/img/cerema.png'),
      name: "Cerema",
      date: 'Janvier 2020 – Juillet 2020',
      desc: "Lors de ce stage, l'établissement public avait besoin d'un outil pour vérifier le bon fonctionnement des phares à l'aide de Webcam placé sur les côtes. J'ai donc utilisé Python et openCV afin de créer un tel outil. Pour se faire, toute les nuits, le logiciel télécharge une minute de vidéo puis l'analyse afin de vérifier le rythme du phare. Si le % d'allumage de celui-ci n'est pas correcte, alors il est considéré comme défaillant.",
      html: <div><br/> <p><a href="https://www.youtube.com/watch?v=HmIPkueeef0"> Exemple de fonctionnement </a></p></div>,

    },
    {
      role: 'Stage dans le développement Web',
      companylogo: require('../assets/img/bourrasque.png'),
      name: "Bourrasque",
      date: 'Janvier 2019 – Juillet 2019',
      desc: 'Création d\'un calendrier permettant à des practiciens de gérer leur emploi du temps, partir en vacance et aux clients de prendre des rendez-vous.',
      html: <div><br/> <p><a href="/RapportBourrasque.pdf"> Rapport de Stage</a></p></div>,
    },
        {
      role: 'Président d\'association',
      companylogo: require('../assets/img/gglan.png'),
      name: 'GGLAN',
      date: 'juillet 2017 – Juillet 2020',
      desc: 'GoodGame-Lan est une association créer par plusieurs de mes amis et moi même. Son but est de faciliter la création de tournois de JeuxVidéo dans la ville de Brest. Pour se fait, on organise différents tournois à différentes vacances scolaires. J\'ai été président les 3 premieres années de l\'association et je suis désormais Trésorier.',
      html: <div><br/> <p><a href="https://GGLAN.fr"> Site Web </a> </p> <p><a href="https://www.facebook.com/GGLANBREST"> Page Facebook </a> </p> <p><a href="https://www.instagram.com/gglanbrest/?hl=fr"> Instagram </a> </p></div>,

    },
  ]
}

// Blog SECTION
 const blogFR = {
   show: true,
 };

export { navBarFR, mainBodyFR, aboutFR, reposFR, skillsFR, leadershipFR, getInTouchFR, experiencesFR, parcoursFR };
