import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'Website Redesign Project',
    description: 'This project aims to redesign the current company website to improve user experience, enhance visual appeal, and increase overall functionality. The new design will incorporate modern web standards, responsive design techniques, and improved accessibility features. The project involves multiple stages, including initial research, design prototyping, development, testing, and deployment.',
    tasks: ['Initial Research', 'Design Prototyping', 'Development']
  },
  {
    title: 'Mobile App Development Project',
    description: 'This project aims to develop a new mobile application to enhance customer engagement and streamline service delivery. The application will feature a user-friendly interface, real-time notifications, and integration with existing backend systems. The project will follow an agile development methodology, involving iterative development, testing, and user feedback sessions.',
    tasks: ['Requirements Gathering', 'UI/UX Design', 'Backend Integration']
  },
  {
    title: 'Marketing Campaign Launch Project',
    description: "This project focuses on launching a comprehensive marketing campaign to promote the company's new product line. The campaign will include digital marketing, social media outreach, and traditional advertising methods. The goal is to increase brand awareness, generate leads, and drive sales. The project will be executed in phases, with continuous monitoring and optimization based on performance metrics.",
    tasks: ['Campaign Strategy Development', 'Content Creation', 'Campaign Launch and Monitoring']
  },
  {
    title: 'E-Commerce Platform Upgrade Project',
    description: "This project is focused on upgrading the existing e-commerce platform to improve user experience, enhance performance, and integrate new features. The upgrade will include revamping the product catalog, improving checkout processes, and implementing advanced analytics. The goal is to provide a more seamless shopping experience and boost conversion rates. The project will involve multiple phases, including planning, development, testing, and deployment.",
    tasks: ['Requirements Analysis', 'Front-End Redesign', 'Backend Optimization']
  }
];

const Project = () => {
  return (
    <Container className="project-container mt-3">
      <Row className="mb-3">
        <Col className="d-flex justify-content-end">
        <Link to="/projects">
          <Button variant="primary">Create New Project</Button>
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={10} md={8} lg={6}>
            <Card className="project-card mb-4">
              <CardBody>
                <CardTitle>{project.title}</CardTitle><hr></hr>
                <p className="project-description"><b>Description:</b> {project.description}</p>
                <h2 className="tasks-header">Tasks</h2>
                <ListGroup>
                  {project.tasks.map((task, idx) => (
                    <ListGroupItem key={idx}>
                      <a href="/task" className="task-link">{task}</a>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Project;
