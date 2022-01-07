import PropTypes from 'prop-types';
import s from './Footer.module.scss';

const Footer = ({ children }) => {
  return (
    <footer>
      <section className={s.section}>
        <div className={s.container}>{children}</div>
      </section>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
