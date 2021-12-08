import PropTypes from 'prop-types';
import s from './Header.module.scss';
import { PureComponent } from 'react';

const Header = ({ status, onClick }) => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s[status]}></div>
        <button type="s.button" className={s.button} onClick={onClick}>
          <p>LogIn</p>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
