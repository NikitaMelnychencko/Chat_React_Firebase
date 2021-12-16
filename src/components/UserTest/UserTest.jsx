import s from './UserTest.module.scss';
import { PureComponent } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseServise/Init';

class UserTest extends PureComponent {
  signInUser(email, password) {
    console.log(email);
    return signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        this.props.onlineCheck();

        return userCredential.user;
      })
      .catch(error => {
        const errorMessage = error.message;
        //   signInErrorTextRender(errorMessage);
      });
  }

  signTestUser = () => {
    const emailValue = 'testuser@gmail.com';
    const passValue = '1234509876';

    this.signInUser(emailValue, passValue);
    this.props.onClose();
  };

  render() {
    return (
      <div>
        <p>Please, choose variant</p>
        <button
          type="s.button"
          className={s.button}
          onClick={this.props.onClick}
        >
          LogIn
        </button>
        <button
          type="s.button"
          className={s.button}
          onClick={this.signTestUser}
        >
          Test User
        </button>
      </div>
    );
  }
}

export default UserTest;
