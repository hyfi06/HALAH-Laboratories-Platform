import PropTypes from 'prop-types';
import '../assets/styles/components/Modal.scss';
import CloseIcon from '../assets/icons/close.svg';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <CloseIcon className="modal__close" onClick={onClose} />
      <div className="modal__container">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
