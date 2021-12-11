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
    console.log(this.state.sigin);
    // this.onSubmit(this.state);
    // this.reset();
    //   const formData = new FormData(e.currentTarget);
    // const emailValue = formData.get('email');
    // const passValue = formData.get('pass');
    // const nameValue = formData.get('name');
    const emailValue = this.state.email;
    const passValue = this.state.pass;
    const nameValue = this.state.name;

    this.props.onClose();
    if (this.state.sigin) {
      signInUser(emailValue, passValue);

      AuthState(user);
    } else {
      regUser(emailValue, passValue);
      updateInUser(nameValue);
      AuthState(user);
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
      <>
        <form
          className={s.content}
          action="registration"
          onSubmit={this.handleSubmit}
        >
          <div>
            {this.state.sigin ? (
              <SinIn
                email={this.state.email}
                pass={this.state.pass}
                onChange={this.handleChange}
              />
            ) : (
              <SinUp
                name={this.state.name}
                email={this.state.email}
                pass={this.state.pass}
                onChange={this.handleChange}
              />
            )}
          </div>
          <button type="submit" className="" aria-label="submit-form">
            {this.state.sigin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        <button
          type="button"
          className={s.switchbtn}
          onClick={this.changeModal}
        >
          {this.state.sigin ? 'Sign Up' : 'Sign In'}
        </button>
      </>
    );
  }
}

// AuthForm.propTypes = {
//   children: PropTypes.node,
// };

export default AuthForm;
