import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withTranslation, initReactI18next } from "react-i18next";
import './i18n.js';
import { useTranslation } from "react-i18next";


import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import ProjectLine from "./components/home/ProjectLine";
import ProjectLineCard from "./components/home/ProjectLineCard";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";

import Experience from "./components/home/Experience";
import {
    navBarFR,
    mainBodyFR,
    aboutFR,
    reposFR,
    leadershipFR,
    skillsFR,
    getInTouchFR,
    experiencesFR,
    parcoursFR
  } from "./editable-stuff/configFR.js";

  import {
    navBarEN,
    mainBodyEN,
    aboutEN,
    reposEN,
    leadershipEN,
    skillsEN,
    getInTouchEN,
    experiencesEN,
    parcoursEN
  } from "./editable-stuff/configEN.js";

import ReactGA from 'react-ga';
  const TRACKING_ID = "GT-5DDCQ9"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

 const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const Home = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();
  const navBar = i18n.language=="fr" ? navBarFR : navBarEN;
  const mainBody = i18n.language=="fr" ? mainBodyFR : mainBodyEN;
  const about =  i18n.language=="fr" ? aboutFR : aboutEN;
  const repos =  i18n.language=="fr" ? reposFR : reposEN;
  const leadership =  i18n.language=="fr" ? leadershipFR : leadershipEN;
  const skills =  i18n.language=="fr" ? skillsFR : skillsEN;
  const getInTouch =  i18n.language=="fr" ? getInTouchFR : getInTouchEN;
  const experiences =  i18n.language=="fr" ? experiencesFR : experiencesEN;
  const parcours =  i18n.language=="fr" ? parcoursFR : parcoursEN;
    const gaEventTracker = useAnalyticsEventTracker('CV');

  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={t(mainBody.message)}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={t(about.heading)}
          message={t(about.message)}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={t(about.resume)}
        />
      )}
      {
        experiences.show && (
          <Experience experiences={experiences}/>

        )
      }

      {
      <ProjectLine 
      heading={t(parcours.heading)}
      parcours={parcours}/>
      }

      {repos.show && (
        <Project
          heading={t(repos.heading)}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={t(leadership.heading)}
          message={t(leadership.message)}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={t(skills.heading)}
          technologiesWeb={skills.technologiesWeb}
          bdd={skills.bdd}
          programmation={skills.programmation}
          systemesExploitation={skills.systemesExploitation}
          gestionProjet={skills.gestionProjet}
          savoirEtre={skills.savoirEtre}
        />
      )}
      
    </>
  );
});

const App = () => {
      const { t, i18n } = useTranslation();
  const navBar = i18n.language=="fr" ? navBarFR : navBarEN;
  const mainBody = i18n.language=="fr" ? mainBodyFR : mainBodyEN;
  const about =  i18n.language=="fr" ? aboutFR : aboutEN;
  const repos =  i18n.language=="fr" ? reposFR : reposEN;
  const leadership =  i18n.language=="fr" ? leadershipFR : leadershipEN;
  const skills =  i18n.language=="fr" ? skillsFR : skillsEN;
  const getInTouch =  i18n.language=="fr" ? getInTouchFR : getInTouchEN;
  const experiences =  i18n.language=="fr" ? experiencesFR : experiencesEN;
  const parcours =  i18n.language=="fr" ? parcoursFR : parcoursEN;
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={t(getInTouch.heading)}
            message={t(getInTouch.message)}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
