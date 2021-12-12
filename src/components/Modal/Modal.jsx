import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

// import { ReactComponent as closeIcon } from '../icons/closeIcon.svg';

const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <>{this.props.children}</>
          <button
            type="button"
            className={s.closebtn}
            onClick={this.props.onClose}
          >
            {/* <closeIcon width="40" height="40" /> */}
          </button>
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
