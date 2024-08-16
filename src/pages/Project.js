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
    description: "A React Based Project where all clinical patient & practice level data are visualized using highcharts(graphs). (Team-Size = 35).",
    image: project1
  },
  {
    title: "Clinical Trials Data Management",
    description: "A React Based Project that standardizes raw clinical data into industry specific formats using deep learning. (Team-Size = 20).",
    image: project2
  },
  {
    title: "Field Service Automation Platform",
    description: "Involved in the development of a React, Nodejs, Sql based field service automation platform where every part of the field service was automated from generating tasks to tracking tasks till its completion. (Team-Size = 25).",
    image: project3
  },
  {
    title: "No code Automation Tool",
    description: "Developed a chrome based plugin from scratch using React, Javascript, css3 which was used to Record, Scan, Locate all the test cases only by authorized users and convert the captured actions into english language using AI, DOM manipulation techniques for test case automation. (Team size = 15) ",
    image: project4
  },
  {
    title: "HR Management Portal",
    description: "Developed few of the modules of HR Management Portal using Reactjs, Javascript and MaterialUI It was used to automate all the daily tasks related to HR (Team size = 8)",
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
        <h1 className="text-center my-5">PROJECTS</h1>
        <p id='proj_descp'>
          I have experience of working on various projects. Below mentioned projects are only available to access for authorized client users. In order to check for further more projects, you can visit my personal GitHub account.
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
