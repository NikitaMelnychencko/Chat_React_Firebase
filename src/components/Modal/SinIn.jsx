import PropTypes from 'prop-types';
import s from './Modal.module.scss';

const SinIn = ({ email, pass, onChange }) => {
  // state = {
  // };

  return (
    <>
      <label className="">
        <span className="">Email</span>
        <input
          type="email"
          name="email"
          className=""
          title="***@mail.com"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          required
          value={email}
          onChange={onChange}
        />
      </label>
      <label className="">
        <span className="">Password</span>
        <input
          type="password"
          name="pass"
          className=""
          required
          minLength="5"
          value={pass}
          onChange={onChange}
        />
      </label>
    </>
  );
};

SinIn.propTypes = {
  //   children: PropTypes.node,
};

export default SinIn;
