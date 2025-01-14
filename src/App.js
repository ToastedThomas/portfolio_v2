import React, { useState } from "react";
import ProjectTile from "./components/ProjectTile";
import Modal from "./components/Modal";

const projects = [
  {
    name: "Pachinko Builder",
    image: "/assets/images/tiles/pachinkoBuilder.png"
  },
  {
    name: "Better Exchange",
    image: "/assets/images/tiles/betterExchange.png"
  },
  {
    name: "Crop Clicker",
    image: "/assets/images/tiles/cropClicker.png"
  },
  {
    name: "Falling Sand",
    image: "/assets/images/tiles/fallingSand.png"
  },
  {
    name: "Sample Survey",
    image: "/assets/images/tiles/sampleSurvey.png"
  },
  {
    name: "Dice Roller",
    image: "/assets/images/tiles/diceRoller.png"
  },
  {
    name: "PokeInfo",
    image: "/assets/images/tiles/pokeInfo.png"
  },
]

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
