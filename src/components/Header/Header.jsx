import PropTypes from 'prop-types';
import s from './Header.module.scss';
import { PureComponent } from 'react';
import { signOutUser } from '../../firebaseServise/log_in_out';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online,
    };
  }

  // componentDidUpdate() {
  //   this.setState(({ online }) => ({
  //     online: sessionStorage.getItem('userId') === null ? false : true,
  //   }));
  // }

  LogOut = () => {
    this.props.onlineCheck();
    signOutUser();
  };

  render() {
    const status = this.state.online ? 'online' : 'offline';

    // console.log(this.state.online)
    // console.log(status)

    return (
      <header className={s.header}>
        <div className={s.container}>
          <div className={s[status]}></div>

          <div>
            {this.state.online ? (
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
