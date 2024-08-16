import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import personalpic from '../Images/Personal_pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';
import '../styles/Home.css';
import { motion } from 'framer-motion';

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact_section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home_container' id='home_section'>
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.42, 0, 0.58, 1]
        }}
      >
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className='home_description'>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h1> <strong> Hello 👋. </strong> </h1>
                </motion.div>
                <p> I'm <span className='highlight_name'> Rakesh Yadav </span>, an enthusiastic
                  FullStack Software Engineer, <br />
                  Keen on Problem Solving 👨‍💻 and Always learning.</p>
                <motion.div
                  className='social-links'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <div className='social-links'>
                    <motion.a
                      href="https://github.com/rakeshsoftwareDevops"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#333' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/rakesh-yadav-848381168/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#0077b5' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </motion.a>
                    <motion.a
                      href="mailto:rakeshyadav45222@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#EA4335' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faGoogle} size="2x" />
                    </motion.a>
                    <motion.a
                      href="https://www.instagram.com/rakeshyad435/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: '#E4405F' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </motion.a>
                  </div>
                </motion.div>
                <Button variant="danger" size="lg" onClick={scrollToContact}>Contact Me</Button>{' '}
              </div>
            </Col>
            <Col>
              <Figure className='personal_pic'>
                <Figure.Image
                  width={300}
                  height={300}
                  alt="Personal Picture"
                  src={personalpic}
                />
              </Figure>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
}
