import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/project.css';
import { motion } from 'framer-motion';
import project1 from '../Images/patient_data.jpg';
import project2 from '../Images/clinical_data.jpg';
import project3 from '../Images/fieldservice_automate.jpg';
import project4 from '../Images/nocodeautomation.jpg';
import project5 from '../Images/hr_portal.jpg';

const projects = [
  {
    title: "Patient Data Management",
    description: "A React-based project where clinical patient and practice-level data are visualized using Highcharts (graphs). The project utilizes Flux and Redux for state management and incorporates various other libraries such as immutable.js, core-js, primereact, jquery, scala, postgresql, java etc.",
    image: project1
  },
  {
    title: "Clinical Trials Data Management",
    description: "A React-based project that standardizes raw clinical data into industry-specific formats using deep learning. Redux was used for centralized data management, and various other npm libraries, python, flask, postgresql were incorporated.",
    image: project2
  },
  {
    title: "Field Service Automation Platform",
    description: "Involved in the development of a field service automation platform based on React, Node.js, and SQL. This platform automates every aspect of field service, from generating tasks to tracking them through to completion.",
    image: project3
  },
  {
    title: "No code Automation Tool",
    description: "Developed a Chrome extension from scratch using React, JavaScript, and CSS3. This plugin allows authorized users to record, scan, locate, automatically capture screenshot of user action for generating test cases by converting user actions into English using AI and DOM manipulation techniques for test case automation.",
    image: project4
  },
  {
    title: "HR Management Portal",
    description: "Developed several modules of an HR Management Portal using React JS, Redux, JavaScript, and Material-UI. This portal automates daily HR tasks and includes a complete authorization module and a dashboard module for HR visualization.",
    image: project5
  }
  // Add more projects here
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Project() {
  return (
    <div id='projects_section'>
      <Container>
        <h1 className="text-center my-5" id="project_heading">PROJECTS</h1>
        <p id='proj_descp'>
        I have experience working on a range of projects. The projects listed below are SaaS-based and are accessible only to authorized client users. For additional projects and details, please visit my personal GitHub account.
        </p>
        <Row>
          {projects.map((project, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="mb-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="card-custom">
                  <Card.Img src={project.image} className="card-img-custom" />
                  <Card.Body>
                    <Card.Title className="card-title-custom">{project.title}</Card.Title>
                    <Card.Text className="card-text-custom">{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
