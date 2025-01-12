import './ProjectTile.scss';

const ProjectTile = ({name, image}) => {
  console.log(image)
  return (
    <div className="projectTile">
      <img src={image} alt={name} />
      <hr />
      <p>{name}</p>
    </div>
  )
}

export default ProjectTile;