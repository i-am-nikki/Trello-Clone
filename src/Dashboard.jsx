import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const Dashboard = () => {
  return (
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#">Trello Clone</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/project">Projects <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tasks">Tasks</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Dashboard</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Projects</h5>
                <p className="card-text">View all projects.</p>
                <Link to="/project" className="btn btn-primary">View Projects</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tasks</h5>
                <p className="card-text">View all tasks.</p>
                <Link to="/tasks" className="btn btn-primary">View Tasks</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Dashboard;