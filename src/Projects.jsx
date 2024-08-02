import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length + 1,
      name: newProjectName,
      description: newProjectDescription,
      tasks: []
    };
    setProjects([...projects, newProject]);
    setNewProjectName('');
    setNewProjectDescription('');
  };

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <Container className="projects-container">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="projects-card">
            <CardBody>
              <CardTitle>Create New Project</CardTitle>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="newProjectName">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="Enter project name"
                  />
                </Form.Group>
                <Form.Group controlId="newProjectDescription">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={newProjectDescription}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                    placeholder="Enter project description"
                  />
                </Form.Group><br></br>
                <Button type="submit">Create Project</Button>
              </Form>
              <ListGroup>
                {projects.map((project) => (
                  <ListGroupItem key={project.id}>
                    <a href="#" className="project-link" onClick={() => handleProjectClick(project.id)}>
                      {project.name}
                    </a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;