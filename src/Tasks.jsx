import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap';

const taskData = [
  {
    project: 'Website Redesign Project',
    tasks: ['Initial Research', 'Design Prototyping', 'Development']
  },
  {
    project: 'Mobile App Development Project',
    tasks: ['Requirements Gathering', 'UI/UX Design', 'Backend Integration']
  },
  {
    project: 'Marketing Campaign Launch Project',
    tasks: ['Campaign Strategy Development', 'Content Creation', 'Campaign Launch and Monitoring']
  },
  {
    project: 'E-Commerce Platform Upgrade Project',
    tasks: ['Requirements Analysis', 'Front-End Redesign', 'Backend Optimization']
  },
];

const TaskList = ({ project, tasks }) => (
  <ListGroup className="mb-3">
    <ListGroupItem>
      <h5 className='text-center'>{project} Tasks</h5>
    </ListGroupItem>
    {tasks.map((task, index) => (
      <ListGroupItem key={index}>
        <a href="/task" className="task-link">{task}</a>
      </ListGroupItem>
    ))}
  </ListGroup>
);

const Tasks = () => {
  return (
    <Container className="tasks-container mt-3">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="tasks-card">
            <CardBody>
              <CardTitle>Task Board</CardTitle>
              {taskData.map((projectData, index) => (
                <React.Fragment key={index}>
                  <TaskList
                    project={projectData.project}
                    tasks={projectData.tasks}
                  />
                  {index < taskData.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Tasks;
