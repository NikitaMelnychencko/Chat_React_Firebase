import PropTypes from 'prop-types';
import s from './AuthForm.module.scss';

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
          className={s.input}
          value={name}
          onChange={onChange}
        />
      </label>
      <label className="">
        <span className="">Email</span>
        <input
          type="email"
          name="email"
          className={s.input}
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
          className={s.input}
          required
          minLength="5"
          value={pass}
          onChange={onChange}
        />
      </label>
    </>
  );
};

SinUp.propTypes = {
  //   children: PropTypes.node,
};

export default SinUp;
