import PropTypes from 'prop-types';
import s from './Massage.module.scss';
const MessageItem = ({ message }) => {
  const data = new Date(message.time);
  let curentUser = null;
  let backColor = 'red';
  if (sessionStorage.getItem('userName') === message.userName) {
    curentUser = 'auto';
    backColor = 'blue';
  }
  return (
    <li className={s.Item} style={{ marginLeft: curentUser }}>
      <h3 className={s.UserName} style={{ background: backColor }}>
        {message.userName}
      </h3>
      <p className={s.UserMassage}>{message.text}</p>
      <p>
        {data.toLocaleDateString()} {data.toLocaleTimeString()}
      </p>
    </li>
  );
};
MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
};
export default MessageItem;
