import "./ArtModal.scss"

const ArtModal = ({ isOpen, onClose, art }) => {
  if (!isOpen) return null; // Don't render element if modal is closed

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>&times;</button>
        <div className="artwork">
          <img src={art.image}  alt={art.description}/>
        </div>
        <div className="description">
          <p>{art.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ArtModal;