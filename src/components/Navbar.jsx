import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBodyFR, reposFR, aboutFR, skillsFR, parcoursFR } from "../editable-stuff/configFR.js";
import { mainBodyEN, reposEN, aboutEN, skillsEN, parcoursEN } from "../editable-stuff/configEN.js";
import ReactGA from "react-ga4";


import { withTranslation, initReactI18next, useTranslation } from "react-i18next";
import '../i18n.js';
  ReactGA.initialize("G-ZF7P8HQE8V");
  ReactGA.send("pageview");
const useAnalyticsEventTracker = (category="Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}
const Navigation = React.forwardRef((props, ref) => {
    const { t, i18n } = useTranslation();
      const gaEventTracker = useAnalyticsEventTracker('CV');
  const mainBody = i18n.language=="fr" ? mainBodyFR : mainBodyEN;
  const about =  i18n.language=="fr" ? aboutFR : aboutEN;
  const repos =  i18n.language=="fr" ? reposFR : reposEN;
  const skills =  i18n.language=="fr" ? skillsFR : skillsEN;
  const parcours =  i18n.language=="fr" ? parcoursFR : parcoursEN;

  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (

    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </Nav.Link>
          } */}
          {repos.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >Projets
            </Nav.Link>
          )}
          <Nav.Link
            className="nav-link lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={()=>gaEventTracker('CV')}
          >
            {t("CV.label")}
          </Nav.Link>
          {about.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              {t("APropos.label")}
            </Nav.Link>
          )}
          {about.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#Experiences"}
            >
              {t("Experiences.label")}
            </Nav.Link>
          )}
          {parcours.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#parcours"}
            >
             {t("Parcours.label")}

            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              {t("Competences.label")}
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
