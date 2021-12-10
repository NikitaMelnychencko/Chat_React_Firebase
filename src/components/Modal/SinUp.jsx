import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import s from './Modal.module.scss';

const SinUp = ({ name, email, pass, onChange }) => {
  // state = {

  // };

  return (
    <>
      <label className="">
        <span className="">Name</span>
        <input
          type="text"
          name="name"
          id="singup-name"
          required
          className=""
          value={name}
          onChange={onChange}
        />
      </label>
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
          minlength="5"
          value={pass}
          onChange={onChange}
        />
      </label>
      <button type="submit" className="" aria-label="sign up">
        Sign Up
      </button>
    </>
  );
};

SinUp.propTypes = {
  //   children: PropTypes.node,
};

export default SinUp;
