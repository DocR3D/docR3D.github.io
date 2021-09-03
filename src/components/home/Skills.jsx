import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, technologiesWeb, bdd, programmation, systemesExploitation, gestionProjet, savoirEtre }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-6 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        

        <Tabs
          className="skills-tabs"
          defaultActiveKey="Technologies-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="Technologies-skills"
            title="Technologies Web"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={technologiesWeb} isScrolled={isScrolled} />
            </Row>
          </Tab>


          <Tab
            tabClassName="skills-tab lead"
            eventKey="bdd-skills"
            title="Base de Données"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={bdd} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="Programmation-skill"
            title="Programmation"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={programmation} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="Systèmes-skills"
            title="Systèmes d'exploitations"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={systemesExploitation} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="Gestion-skill"
            title="Gestion de Projet"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={gestionProjet} isScrolled={isScrolled} />
            </Row>
          </Tab>

          <Tab
            tabClassName="skills-tab lead"
            eventKey="Savoir-skills"
            title="Savoir être"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={savoirEtre} isScrolled={isScrolled} />
            </Row>
          </Tab>     


        </Tabs>
      </Container>
    </Jumbotron>
  );
}

export default Skills;
