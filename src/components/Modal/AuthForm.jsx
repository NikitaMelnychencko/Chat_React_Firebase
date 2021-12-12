import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import s from './Modal.module.scss';
import { auth, user } from '../../firebaseServise/Init';
import SinIn from './SinIn';
import SinUp from './SinUp';
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

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
    // console.log(this.state.sigin);

    const emailValue = this.state.email;
    const passValue = this.state.pass;
    const nameValue = this.state.name;

    this.props.onClose();
    if (this.state.sigin) {
      this.signInUser(emailValue, passValue);
      this.AuthState(user);
    } else {
      this.regUser(emailValue, passValue);
      this.updateInUser(nameValue);
      this.AuthState(user);
    }
  };

  // Reg User
  regUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        //   swetchClass();
        //   addClass();
        return userCredential.user.uid;
      })
      .catch(error => {
        const errorMessage = error.message;
        //   signUpErrorRender(errorMessage);
      });
  }

  // Aut User
  signInUser(email, password) {
    console.log(email);
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        this.props.onlineCheck();
        //   swetchClass();
        //   addClass();

        // if (localStorage.getItem('idFilm') !== null) {
        //   // updateButton(localStorage.getItem('idFilm'));
        // }
        return userCredential.user;
      })
      .catch(error => {
        const errorMessage = error.message;
        //   signInErrorTextRender(errorMessage);
      });
  }

  updateInUser(name) {
    // console.log(auth.currentUser);
    return updateProfile(auth.currentUser, {
      displayName: `${name}`,
    });
  }

  AuthState(user) {
    return onAuthStateChanged(auth, user => {
      if (user) {
        const userId = user.uid;
        return sessionStorage.setItem('userId', `${userId}`);
        // this.props.onlineCheck();
      } else {
        return;
      }
    });
  }

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
