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
  state = {
    name: '',
    email: '',
    pass: '',
  };

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

  //   sendForm = e => {
  //     e.preventDefault();
  //     const formData = new FormData(e.currentTarget);
  //     const emailValue = formData.get('email');
  //     const passValue = formData.get('pass');
  //     const nameValue = formData.get('name');
  //     regUser(emailValue, passValue);
  //     updateInUser(nameValue);
  //     AuthState(user);
  //   };

  // handleNameChange = e => {
  //     const value = e.curretTarger.name;
  //     console.log(value);
  //   this.setState({ [value]: e.currentTarget.value.toLowerCase() });
  // };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.reset();
    console.log(this.state);
    const emailValue = this.state.email;
    const passValue = this.state.pass;
    const nameValue = this.state.name;
    regUser(emailValue, passValue);
    updateInUser(nameValue);
    AuthState(user);
  };

  // reset = () => {
  //   this.setState({
  //   name: '',
  //   email: '',
  //   pass: '', });
  // };

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
                value={this.state.name}
                onChange={this.handleChange}
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
                value={this.state.email}
                onChange={this.handleChange}
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
                value={this.state.pass}
                onChange={this.handleChange}
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
