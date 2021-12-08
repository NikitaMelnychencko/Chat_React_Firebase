import PropTypes from 'prop-types';
import s from './Main.module.scss';

const Main = ({ children }) => {
  return (
    <main>
      <section className={s.Section}>
        <div className={s.Container}>{children}</div>
      </section>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
