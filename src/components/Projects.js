import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBuilding } from 'react-icons/fa'; // Import building icon
import './Projects.css';

function Projects() {
  const navigate = useNavigate();

  const completedProjects = [
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Project Beta' },
  ];

  const inProgressProjects = [
    { id: 3, name: 'Project Gamma' },
    { id: 4, name: 'Project Delta' },
  ];

  const handleProjectClick = (project) => {
    // Redirect to Dashboard only for completed projects
    if (completedProjects.some((p) => p.id === project.id)) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-section">
        <h3 className="section-title">Completed Projects</h3>
        <div className="projects-list">
          {completedProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <FaBuilding className="project-icon" />
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-section">
        <h3 className="section-title">Projects in Progress</h3>
        <div className="projects-list">
          {inProgressProjects.map((project) => (
            <div key={project.id} className="project-card">
              <FaBuilding className="project-icon" />
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;