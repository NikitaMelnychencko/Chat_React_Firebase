import PropTypes from 'prop-types';
import s from './Header.module.scss';

const Header = ({ state }) => {
  return (
    <header>
      <section className={s.Section}>
        <div className='Svg'></div>
     <button type='button'></button>
      </section>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
