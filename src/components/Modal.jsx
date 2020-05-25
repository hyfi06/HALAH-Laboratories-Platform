import PropTypes from 'prop-types';
import '../assets/styles/components/Modal.scss';

function Modal({ isOpen, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__container">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
