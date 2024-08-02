import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, ListGroup, ListGroupItem } from 'react-bootstrap';

const projects = [
  {
    id: 1,
    title: "`Website Redesign Project` Task Details" ,
    tasks: [
      {
        id: 1,
        name: 'Initial Research',
        description: 'Research current web trends, user preferences, and analyze competitor websites to gather insights for redesign.',
        status: 'In Progress',
        dueDate: '2024-09-15'
      },
      {
        id: 2,
        name: 'Design Prototyping',
        description: 'Create design prototypes and wireframes based on initial research findings to visualize the new website layout.',
        status: 'Not Started',
        dueDate: '2024-10-15'
      },
      {
        id: 3,
        name: 'Development',
        description: 'Implement the design prototypes into a fully functional website with modern web technologies and responsive design.',
        status: 'Not Started',
        dueDate: '2024-11-15'
      }
    ]
  },
  {
    id: 2,
    title: "`Mobile App Development Project` Task Details" ,
    tasks: [
      {
        id: 1,
        name: 'Requirements Gathering',
        description: 'Collect and document detailed requirements from stakeholders for the new mobile application.',
        status: 'Done',
        dueDate: '2024-08-01'
      },
      {
        id: 2,
        name: 'UI/UX Design',
        description: 'Design the user interface and user experience for the mobile app, ensuring a seamless and intuitive user journey.',
        status: 'In Progress',
        dueDate: '2024-09-01'
      },
      {
        id: 3,
        name: 'Backend Integration',
        description: 'Develop and integrate backend services and APIs to support the mobile app’s functionality and data storage.',
        status: 'Not Started',
        dueDate: '2024-10-01'
      }
    ]
  },
  {
    id: 3,
    title: "`Marketing Campaign Launch Project` Task Details" ,
    tasks: [
      {
        id: 1,
        name: 'Campaign Strategy Development',
        description: 'Develop a comprehensive strategy for the marketing campaign, including goals, target audience, and key messaging.',
        status: 'Done',
        dueDate: '2024-07-11'
      },
      {
        id: 2,
        name: 'Content Creation',
        description: 'Create engaging content for the marketing campaign, including social media posts, advertisements, and promotional materials.',
        status: 'Done',
        dueDate: '2024-09-01'
      },
      {
        id: 3,
        name: 'Campaign Launch and Monitoring',
        description: 'Launch the marketing campaign and continuously monitor its performance, making adjustments as needed to optimize results.',
        status: 'In Progress',
        dueDate: '2024-10-01'
      }
    ]
  },
  {
    id: 4,
    title: "`E-Commerce Platform Upgrade Project` Task Details" ,
    tasks: [
      {
        id: 1,
        name: 'Requirements Analysis',
        description: 'Analyze current system requirements and identify improvements needed for the e-commerce platform upgrade.',
        status: 'Done',
        dueDate: '2024-07-11'
      },
      {
        id: 2,
        name: 'Front-End Redesign',
        description: 'Redesign the front-end of the e-commerce platform to enhance user experience and align with modern design standards.',
        status: 'In-Progress',
        dueDate: '2024-08-21'
      },
      {
        id: 3,
        name: 'Backend Optimization',
        description: 'Optimize the backend of the e-commerce platform for better performance, scalability, and security.',
        status: 'In Progress',
        dueDate: '2024-10-01'
      }
    ]
  },
];

const TaskDetail = ({ label, value }) => (
  <Row className="mb-2">
    <Col xs={4} sm={3} md={2} lg={2}>
      <strong>{label}:</strong>
    </Col>
    <Col xs={8} sm={9} md={10} lg={10}>
      {value}
    </Col>
  </Row>
);

const Task = () => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleTaskClick = (projectId, taskId) => {
    setSelectedProjectId(projectId);
    setSelectedTaskId(taskId);
  };

  return (
    <Container className="task-details-container mt-3">
      <Row className="justify-content-center">
        {projects.map((project) => (
          <Col key={project.id} xs={12} sm={10} md={8} lg={6} className="mb-4">
            <Card className="task-details-card">
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                <ListGroup>
                  {project.tasks.map((task) => (
                    <ListGroupItem
                      key={task.id}
                      action
                      onClick={() => handleTaskClick(project.id, task.id)}
                    >
                      {task.name}
                    </ListGroupItem>
                  ))}
                </ListGroup>
                <div className="mt-3">
                  {project.tasks.map((task) =>
                    task.id === selectedTaskId && project.id === selectedProjectId ? (
                      <div key={task.id}>
                        <TaskDetail label="Name" value={task.name} />
                        <TaskDetail label="Description" value={task.description} />
                        <TaskDetail label="Status" value={task.status} />
                        <TaskDetail label="Due Date" value={task.dueDate} />
                      </div>
                    ) : null
                  )}
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Task;
