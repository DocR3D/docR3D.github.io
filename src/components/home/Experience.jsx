import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron,
    Modal
} from "react-bootstrap";
import { withTranslation, initReactI18next } from "react-i18next";
import '../../i18n.js';
import { useTranslation } from "react-i18next";

const Experience = ({experiences}) => {
    const { t, i18n } = useTranslation();

    return (  
        <section id="Experiences" className="section">
            <Container>
                <Jumbotron fluid className="bg-white ">
                    <h2 className="display-4 mb-5 text-center ">
                        {t(experiences.heading)}
                    </h2>
                    <Row mt-20>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;