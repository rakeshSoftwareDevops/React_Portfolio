import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.css';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_6g2lc7f', 'template_mc8qxqn', formData, '0B9DgGTss3_AQvHOZ')
      .then((result) => {
        console.log('Email successfully sent:', result.text);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error('Email sending failed:', error.text);
      });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
    },
    click: {
      scale: 0.9,
      rotate: -10,
      transition: { duration: 0.1 },  
    }
  };

  return (
    <div id='contact_section'>
      <Container>
        <h2 className="text-center my-5">CONTACT ME</h2>
        <Row>
          <Col xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={formVariants}
            >
              <div className="detail">
                <h4>Location</h4>
                <p>Mumbai Maharshtra, India</p>
              </div>
              <div className="detail">
                <h4>Email me</h4>
                <p>rakeshyadav45222@gmail.com</p>
              </div>
              <div className="">
                <h4>Get connected</h4>
                <div className='social-links'>
                  <motion.a
                    href="https://github.com/rakeshsoftwareDevops"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                    whileTap="click"
                    variants={iconVariants}
                  >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/rakesh-yadav-848381168/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                    whileTap="click"
                    variants={iconVariants}
                    style={{ color: '#0077b5' }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/rakeshyad435/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                    whileTap="click"
                    variants={iconVariants}
                    style={{ color: '#E4405F' }}
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/7045606922"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                    whileTap="click"
                    variants={iconVariants}
                    style={{ color: '#25D366' }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={formVariants}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>

                <Button variant="danger" size="lg" type="submit" className="mt-3 w-100">
                  Submit
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
