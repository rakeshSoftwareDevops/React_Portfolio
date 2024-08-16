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
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
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
            <h2 id='skills_heading'>MY SKILLS</h2>
            <p id='skills_descp'>
              I have extensive experience working with various tech stacks on multiple large-scale projects. As a technical geek, I thrive in environments where I can learn continuously and apply my skills to create efficient and innovative solutions.
              <br />
              As a Full-Stack Engineer, I specialize in Javascript, React, Redux, and NodeJs. Below I've listed some of the key technologies I've worked with along with their proficiency levels.
            </p>
          </Row>
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















