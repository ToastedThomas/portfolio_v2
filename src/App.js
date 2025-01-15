import React, { useState } from "react";

import ProjectTile from "./components/ProjectTile";
import Modal from "./components/Modal";
import ArtTile from "./components/ArtTile";

import projects from "./data/ProjectsInfo";
import art from "./data/ArtInfo";


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
      <div className="artContainer">
        <h2>Art</h2>
        {art.map((piece, index) => (
          <ArtTile 
            key={index}
            image={piece.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
