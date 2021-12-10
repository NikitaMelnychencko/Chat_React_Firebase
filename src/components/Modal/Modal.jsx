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
import SinIn from './SinIn';
import SinUp from './SinUp';

// import { ReactComponent as closeIcon } from '../icons/closeIcon.svg';

const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {
  state = {
    name: '',
    email: '',
    pass: '',
    sigin: true,
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

  changeModal = () => {
    this.setState(({ sigin }) => ({
      sigin: !sigin,
    }));
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
    // this.props.onSubmit(this.state);
    // this.reset();
    //   const formData = new FormData(e.currentTarget);
    // const emailValue = formData.get('email');
    // const passValue = formData.get('pass');
    // const nameValue = formData.get('name');
    const emailValue = this.state.email;
    const passValue = this.state.pass;
    const nameValue = this.state.name;
    // console.log(nameValue);

    if (this.state.sigin) {
      signInUser(emailValue, passValue);
      // AuthState(user);
    } else {
      regUser(emailValue, passValue);
      updateInUser(nameValue);
      // AuthState(user);
    }
  };

  // reset = () => {
  //   this.setState({
  //   name: '',
  //   email: '',
  //   pass: '', });
  // };

  render() {
    // let onAuthPage;

    // if (this.state.sigin) {
    //   onAuthPage = (
    //     <SinIn
    //       email={this.state.email}
    //       pass={this.state.pass}
    //       onChange={this.handleChange}
    //     ></SinIn>
    //   );
    // } else {
    //   onAuthPage = (
    //     <SinUp
    //       name={this.state.name}
    //       email={this.state.email}
    //       pass={this.state.pass}
    //       onChange={this.handleChange}
    //     ></SinUp>
    //   );
    // }

    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <form
            className={s.content}
            action="registration"
            onSubmit={this.handleSubmit}
          >
            <button
              type="button"
              className={s.switchbtn}
              onClick={this.changeModal}
            >
              {/* <closeIcon width="40" height="40" /> */}
            </button>
            {/* <div>{onAuthPage}</div> */}
            <div>
              {this.state.sigin ? (
                <SinIn
                  email={this.state.email}
                  pass={this.state.pass}
                  onChange={this.handleChange}
                ></SinIn>
              ) : (
                <SinUp
                  name={this.state.name}
                  email={this.state.email}
                  pass={this.state.pass}
                  onChange={this.handleChange}
                ></SinUp>
              )}
            </div>
            <button
              type="button"
              className={s.closebtn}
              onClick={this.props.onClose}
            >
              {/* <closeIcon width="40" height="40" /> */}
            </button>
          </form>
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
