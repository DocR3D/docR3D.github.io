import '../i18n.js';
import { useTranslation } from "react-i18next";


// Navigation Bar SECTION
const navBarFR = {
    show: true,

};

// Main Body SECTION
const mainBodyFR = {
  gradientColors: "#4484ce, #1ad7c0, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Maxime",
  middleName: "",
  lastName: "Yonnet",
  message: "Ingénieur en machine learning & développement logiciel (Python · Java · SQL) - full remote, disponible immédiatement",
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
  message: "Ingénieur en machine learning & développement logiciel, MSc (UBO). 2 ans en full remote (middleware & BSP - Groupe SEB). Actuellement en recherche d’un poste en ML/data ou backend, disponible immédiatement.",
  resumeDev: require("../editable-stuff/cv_dev_fr.pdf"),
  resumeIa: require("../editable-stuff/cv_ia_fr.pdf"),
  // fallback
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



 const skillsFR = {
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
        { name: "Sockets TCP/IP", value: 70 },
    ],
    systemesEmbarques: [
        { name: "MicroEJ", value: 70 },
        { name: "BSP / C bas-niveau", value: 75 },
    ],
    systemesExploitation: [
        { name: "Linux (usage quotidien)", value: 85 },
        { name: "Windows", value: 70 },
    ],
    outilsGestion: [
        { name: "Docker", value: 80 },
        { name: "Git", value: 90 },
        { name: "UML", value: 80 },
        { name: "Méthodes agiles", value: 80 },
        { name: "Jira / Confluence", value: 75 },
    ],
    savoirEtre: [
        { name: "Autonomie", value: 90 },
        { name: "Sang-froid", value: 85 },
        { name: "Curiosité technique", value: 80 },
        { name: "Esprit d’équipe", value: 75 },
    ],
};
const parcoursFR = {
    show: true,
    heading: "Parcours.label",
    data: [
        // 2020–2022 - Diplômes
        {
            name: "Master Informatique — Parcours SIIA",
            location: "Brest, France",
            desc: "Master en systèmes intelligents, interactifs et autonomes (UBO). Focus : ML, vision, optimisation, embarqué.",
            position: "left",
            date: "2020–2022",
            href: "https://www.univ-brest.fr/departement-informatique/fr/mentions-legales"
        },

        // 2021 - Projets
        {
            name: "Détection d’armes à feu dans des images",
            location: "",
            desc: "Modèle supervisé (scikit-learn) pour détecter des armes à feu ; prétraitements et features avec OpenCV.",
            position: "right",
            date: "2021",
            href: "https://www.youtube.com/watch?v=Xh3N65NMmyk&feature=youtu.be"
        },
        {
            name: "Navigation robotique par logique floue",
            location: "",
            desc: "IA floue pour atteindre un point cible en évitant les obstacles ; règles, fuzzification/défuzzification.",
            position: "right",
            date: "2021",
            href: "/RapportLogiqueFloue.pdf"
        },
        {
            name: "TSP - heuristique inspirée du système immunitaire",
            location: "",
            desc: "Approche bio-inspirée pour trouver un cycle court passant par tous les points (problème du voyageur).",
            position: "right",
            date: "2021",
            href: "/RapportVoyageur.pdf"
        },
        {
            name: "Enveloppe convexe (calcul parallèle, PVM)",
            location: "",
            desc: "Algorithme d’enveloppe convexe supérieure en architecture maître/esclave (PVM).",
            position: "right",
            date: "2021",
            href: "/RapportUH.pdf"
        },

        // 2019–2020 et avant - Diplômes
        {
            name: "Licence Informatique (L3)",
            location: "Brest, France",
            desc: "Algorithmes, structures de données, C/Java, réseaux (sockets), bases de données.",
            position: "left",
            date: "2019–2020",
            href: "https://www.univ-brest.fr/departement-informatique/fr/page/licence-informatique-3eme-annee-cdaii"
        },
        {
            name: "Cégep d’informatique - échange",
            location: "Matane, Québec",
            desc: "Semestre d’échange (6 mois) au Cégep de Matane.",
            position: "left",
            date: "01/2019–06/2019",
            href: "https://www.cegep-matane.qc.ca/programmes/informatique/"
        },
        {
            name: "DUT Informatique (désormais BUT)",
            location: "Laval, France",
            desc: "Diplôme universitaire (2 ans) : programmation, réseaux, bases de données.",
            position: "left",
            date: "2017–2019",
            href: "https://iut-laval.univ-lemans.fr/fr/nos-formations/nos-diplomes/bachelor-universitaire-de-technologie.html"
        }
    ], 
};

// GET IN TOUCH SECTION
const getInTouchFR = {
  show: true,
  heading: "Le mot de la fin",
  message:
    "Je suis à la recherche d'un emploi en informatique dans le domaine du machine learning, intelligence artificielle, ou de data sciences en général. Vous pouvez me contacter ici",
  email: "Yonnet.maxime@gmail.com",
};

const experiencesFR = {
  show: true,
  heading: "Experiences.label",
    data: [
        {
        role: "Développeur Middleware & BSP (via Witekio/Avnet)",
        companylogo: require('../assets/img/groupeseb.jpg'),
        company: "Groupe SEB",
        date: "2023–2025, full remote",
        desc: "Maintenance et évolution de la gamme Touch (écrans tactiles). Développement du système de calibration de balance (BSP → Middleware → UI). Mise en place d’un envoi automatique de rapports d’erreurs avec logs/statistiques. Collaboration avec UI, testeurs et chef de projet sur code legacy (Java 7). Respect strict des contraintes de sécurité, de qualité et de délais."
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
      role: 'Président et administrateur systèmes',
      companylogo: require('../assets/img/gglan.png'),
      name: 'GGLAN',
      date: 'juillet 2017 – Juillet 2025',
      desc: "Organisation de tournois e-sport à Brest : administration système Linux et réseau, serveurs Counter-Strike déployés via Docker, supervision et gestion d’incidents en temps réel, coordination des équipes et de la logistique.",
      html: <div><br /> <p><a href="https://GGLAN.fr"> Site Web </a> </p> <p><a href="https://www.facebook.com/GGLANBREST"> Page Facebook </a> </p> <p><a href="https://www.instagram.com/gglanbrest/?hl=fr"> Instagram </a> </p></div>,

        },
        {
            role: "Créateur - Plateforme média auto-hébergée (projet perso)",
            company: "Home Media Stack",
            companylogo: require("../assets/img/media.png"), // ou ton image
            date: "2021 - aujourd'hui",
            desc: "Hébergement privé de photos et vidéos personnelles et de contenus libres (CC/domaine public). Lecture via Jellyfin, reverse proxy Nginx derrière Cloudflare (TLS), stockage agrégé MergeFS, orchestration Docker/Portainer, tâches cron, supervision. HTTPS partout (TLS, HSTS) - seuls les ports 80/443 sont exposés - accès authentifié. Aucune source de contenu connectée."        }
  ]
}

// Blog SECTION
 const blogFR = {
   show: true,
 };

export { navBarFR, mainBodyFR, aboutFR, reposFR, skillsFR, leadershipFR, getInTouchFR, experiencesFR, parcoursFR };
