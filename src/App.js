import React, { useState } from "react";
import ProjectTile from "./components/ProjectTile";
import Modal from "./components/Modal";
import projects from "./data/ProjectsInfo";


const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  }
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        project={selectedProject}
      />
      <h1>Welcome to My Portfolio!</h1>
      <div className="projectsContainer">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <ProjectTile 
            key={index}
            name={project.name}
            image={project.image}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
