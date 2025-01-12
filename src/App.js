import ProjectTile from "./components/ProjectTile";

const projects = [
  {
    name: "Pachinko Builder",
    image: "portfolio_v2/assets/images/tiles/pachinkoBuilder.png"
  },
  {
    name: "Better Exchange",
    image: "portfolio_v2/assets/images/tiles/betterExchange.png"
  },
  {
    name: "Crop Clicker",
    image: "portfolio_v2/assets/images/tiles/cropClicker.png"
  },
  {
    name: "Falling Sand",
    image: "portfolio_v2/assets/images/tiles/fallingSand.png"
  },
  {
    name: "Sample Survey",
    image: "portfolio_v2/assets/images/tiles/sampleSurvey.png"
  },
  {
    name: "Dice Roller",
    image: "portfolio_v2/assets/images/tiles/diceRoller.png"
  },
  {
    name: "PokeInfo",
    image: "portfolio_v2/assets/images/tiles/pokeInfo.png"
  },
]

const App = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio!</h1>
      <div className="projectsContainer">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <ProjectTile 
            key={index}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
