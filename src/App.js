import React, { useState } from "react";
import ProjectTile from "./components/ProjectTile";
import Modal from "./components/Modal";
import projects from "./data/ProjectsInfo";


const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}/>
      <h1>Welcome to My Portfolio!</h1>
      <div className="projectsContainer">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <ProjectTile 
            key={index}
            name={project.name}
            image={project.image}
            onClick={openModal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
