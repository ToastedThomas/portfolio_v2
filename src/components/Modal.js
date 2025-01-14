import './Modal.scss';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render element if modal is closed

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="modalClose" onClick={onClose}>&times;</button>
      </div>
    </div>
  )
}

export default Modal;