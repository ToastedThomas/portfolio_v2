import './Modal.scss';

const Modal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null; // Don't render element if modal is closed

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>&times;</button>
        <div className="projectTitle">
          <a href={project.link} target="_blank">
            <h2>{project.name}</h2><i className="fa-solid fa-arrow-up-right-from-square" />
          </a>
        </div>
        <div className="projectImages">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="projectDesc">
          <p>{project.description}</p>
        </div>
        <div className="projectTags">
          {project.tags.map(tag => (
            <div className="tag">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal;