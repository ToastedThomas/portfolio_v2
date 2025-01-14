import './ProjectTile.scss';

const ProjectTile = ({name, image, onClick}) => {
  return (
    <div className="projectTile" onClick={onClick}>
      <img src={image} alt={name} />
      <hr />
      <p>{name}</p>
    </div>
  )
}

export default ProjectTile;