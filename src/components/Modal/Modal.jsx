import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import {
  regUser,
  signInUser,
  AuthState,
  updateInUser,
} from '../../firebaseServise/log_in_out';
import { user } from '../../firebaseServise/Init';
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
      this.props.onClose(null, null);
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose(null, null);
    }
  };

  sendForm = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const emailValue = formData.get('email');
    const passValue = formData.get('pass');
    const nameValue = formData.get('name');
    regUser(emailValue, passValue);
    updateInUser(nameValue);
    AuthState(user);
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <form
            className={s.content}
            action="registration"
            onClick={this.sendForm}
          >
            <label className="">
              <span className="">Name</span>
              <input
                type="text"
                name="name"
                id="singup-name"
                required
                className=""
              />
            </label>
            <label className="">
              <span className="">Email</span>
              <input
                type="email"
                name="email"
                className=""
                title="***@mail.com"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                required
              />
            </label>
            <label className="">
              <span className="">Password</span>
              <input
                type="password"
                name="pass"
                className=""
                required
                minlength="5"
              />
            </label>
            <button type="submit" className="" aria-label="sign up">
              Sign up
            </button>
          </form>

          <button
            type="button"
            className={s.button}
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
