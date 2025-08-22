import './Button.css';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="custom-button">
      {children}
    </button>
  )
}

export default Button;
