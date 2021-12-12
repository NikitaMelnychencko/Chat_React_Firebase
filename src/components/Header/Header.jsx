import PropTypes from 'prop-types';
import s from './Header.module.scss';
import { PureComponent } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseServise/Init';

class Header extends PureComponent {
  LogOut = () => {
    return signOut(auth).then(() => {
      // Sign-out successful.
      const userId = null;
      sessionStorage.removeItem('userId');
      this.props.onlineCheck();
    });
  };

  render() {
    const status = this.props.online ? 'online' : 'offline';
    // console.log(this.state.online)
    // console.log(status)

    return (
      <header className={s.header}>
        <div className={s.container}>
          <div className={s[status]}></div>

          <div>
            {this.props.online ? (
              <button
                type="s.button"
                className={s.button}
                onClick={this.LogOut}
              >
                <p>LogOut</p>
              </button>
            ) : (
              <button
                type="s.button"
                className={s.button}
                onClick={this.props.onClick}
              >
                <p>LogIn</p>
              </button>
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
