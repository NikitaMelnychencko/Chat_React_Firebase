import PropTypes from 'prop-types';
import s from './Massage.module.scss';
const MessageItem = ({ message }) => {
  const data = new Date(message.time);
  const dataString = {
    time: data.toLocaleTimeString(),
    day: data.getUTCDate(),
    mon: data.getDate(),
    year: data.getFullYear(),
  };
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
        {dataString.day}.{dataString.mon}.{dataString.year} {dataString.time}
      </p>
    </li>
  );
};
MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
};
export default MessageItem;
