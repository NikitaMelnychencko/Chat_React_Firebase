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
      sessionStorage.removeItem('userName');
      this.props.onlineCheck();
    });
  };

  render() {
    const state = this.props.online ? 'online' : 'offline';

    return (
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.user}>
            <div className={s[state]}></div>
            <p className={s.name}>{sessionStorage.getItem('userName')}</p>
          </div>

          <div>
            {this.props.online ? (
              <button
                type="s.button"
                className={s.button}
                onClick={this.LogOut}
              >
                LogOut
              </button>
            ) : (
              <button
                type="s.button"
                className={s.button}
                onClick={this.props.onClick}
              >
                LogIn
              </button>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
