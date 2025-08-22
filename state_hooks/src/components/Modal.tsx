import './Modal.css';

function Modal({ isOpen, onClose}) {
  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div
        className='modal-content'
        onClick={(event) => event.stopPropagation()}
      >
        <button className='modal-close' onClick={onClose}>✖</button>
        <p>Aqui tbm posso colocar texto</p>
        Como sem a tag p
      </div>
    </div>
  )
}

export default Modal;
