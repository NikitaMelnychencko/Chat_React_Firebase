import PropTypes from 'prop-types';
import s from './Header.module.scss';

const Header = ({ children, title }) => {
  return (
    <header>
      <section className={s.Section}>
        <div className={s.Container}>{children}</div>
      </section>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
