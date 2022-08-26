import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Project = ({ heading, username, length, specfic, parcours }) => {
  const bgStyle = { backgroundColor: "#e9ecef" };

  return (
    <div style={bgStyle} id="parcours">

                <h2 className="display-4 mb-5 pt-5 text-center">{heading}</h2>

        <VerticalTimeline>

          {parcours.data.map(data => (
            <VerticalTimelineElement
              position={ data.position }
              className="vertical-timeline-element--work"
              contentStyle={data.position == "left" ? { background: 'rgb(196, 206, 215)', color: '#00' }: { background: 'rgb(161, 157, 191)', color: '#00'  }}
              contentArrowStyle={data.position == "left" ? { borderRight: '7px solid  rgb(196, 206, 215)' }: { borderRight: '7px solid  rgb(161, 157, 191)' }}
              date={data.date}
              iconStyle= {data.position == "left" ? { background: 'rgb(196, 206, 215)', color: '#00' }: { background: 'rgb(161, 157, 191)', color: '#00'  }}>
              <h3 className="vertical-timeline-element-title">{data.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">{data.location}</h4>
              <p>
                {data.desc}
              </p>
              <a type="button" className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer" href={data.href}> Plus d'informations </a>
            </VerticalTimelineElement>
              ))}
</VerticalTimeline>
</div>
  );
};

export default Project;
