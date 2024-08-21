import React from 'react';
import { motion } from 'framer-motion';
import '../styles/myskills.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import reactlogo from '../Images/React_Logo.png';
import reduxlogo from '../Images/redux_logo.png';
import nodejslogo from '../Images/nodejs_logo.png';
import htmlcssjslogo from '../Images/htmlcssjs.png';
import tslogo from '../Images/ts_logo.png';
import pythonlogo from '../Images/python_logo.jpeg';
import javalogo from '../Images/java_logo.png';
import postgreslogo from '../Images/postgres_logo.png';
import postmanlogo from '../Images/postman_logo.png';
import gitlogo from '../Images/git_logo.png';
import dockerlogo from '../Images/docker_logo.png';

export default function Myskills() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 1 } },
  };

  return (
    <div id='myskills_section'>
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Row>
            <motion.h1
              className="text-center"
              id='skills_heading'
              variants={headingVariants}
            >
              MY SKILLS
            </motion.h1>
            <motion.p
              id='skills_descp'
              variants={paragraphVariants}
            >
              I have extensive experience working with various tech stacks on multiple large-scale projects. As a technical enthusiast, I thrive in environments where I can continuously learn and apply my skills to create efficient and innovative solutions.
              <br />
              As a Full-Stack Engineer, I specialize in JavaScript, React, Redux, and Node.js. Additionally, I have experience working with various other technologies, including Java, Python, PostgreSQL, Docker, Podman, Postman, GitHub, and have knowledge of CI/CD pipelines, deployment. Below, I've listed some of the key technologies I've worked with, along with my proficiency levels.
            </motion.p>
          </Row>
          <br />
          <Row>
            {[htmlcssjslogo, reactlogo, reduxlogo, nodejslogo, tslogo, postgreslogo, pythonlogo, javalogo, gitlogo, postmanlogo, dockerlogo].map((logo, index) => (
              <Col xs={6} sm={4} md={3} lg={2} key={index}>
                <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }}>
                  <Figure>
                    <Figure.Image
                      className="logo-image"
                      alt={`${logo}_Logo`}
                      src={logo}
                    />
                    <Figure.Caption>
                      {logo === htmlcssjslogo ? 'HTML5, CSS3 & JS (Expert)' : 
                       logo === reactlogo ? 'React (Expert)' : 
                       logo === reduxlogo ? 'Redux (Expert)' : 
                       logo === nodejslogo ? 'Node Js (Expert)' : 
                       logo === tslogo ? 'Typescript (Expert)' : 
                       logo === postgreslogo ? 'PostgreSQL (Intermediate)' : 
                       logo === pythonlogo ? 'Python (Intermediate)' : 
                       logo === javalogo ? 'Java (Intermediate)' : 
                       logo === gitlogo ? 'Git - source control (Expert)' : 
                       logo === postmanlogo ? 'Postman (Expert)' : 
                       logo === dockerlogo ? 'Docker (Intermediate)' : ''}
                    </Figure.Caption>
                  </Figure>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}
