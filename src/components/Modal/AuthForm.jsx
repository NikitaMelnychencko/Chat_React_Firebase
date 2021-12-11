import PropTypes from 'prop-types';
import { PureComponent } from 'react';
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

class AuthForm extends PureComponent {
  state = {
    name: '',
    email: '',
    pass: '',
    sigin: true,
  };

  changeModal = () => {
    this.setState(({ sigin }) => ({
      sigin: !sigin,
    }));
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.onSubmit(this.state);
    // this.reset();
    //   const formData = new FormData(e.currentTarget);
    // const emailValue = formData.get('email');
    // const passValue = formData.get('pass');
    // const nameValue = formData.get('name');
    const emailValue = this.state.email;
    const passValue = this.state.pass;
    const nameValue = this.state.name;

    if (this.state.sigin) {
      signInUser(this.state.email, this.state.pass);
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
    // console.log(this.emailValue);

    return (
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
          {this.state.sigin ? 'Sign Up' : 'Sign In'}
        </button>
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
          type="submit"
          className=""
          aria-label="submit-form"
          onClick={this.props.onClose}
          onSubmit={this.handleSubmit}
        >
          {this.state.sigin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  children: PropTypes.node,
};

export default AuthForm;
