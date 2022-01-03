import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Massage.module.scss';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteData } from 'firebaseServise/data_featch';

const MessageItem = ({ message }) => {
  const options = ['delete message'];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = event => {
    setAnchorEl(null);
    if (event.currentTarget.outerText === 'delete message') {
      deleteData(event.currentTarget.dataset.key);
    }
  };

  const data = new Date(message.time);
  let curentUser = null;
  let backColor = 'red';
  if (sessionStorage.getItem('userName') === message.userName) {
    curentUser = 'auto';
    backColor = 'blue';
  }
  return (
    <li className={s.Item} style={{ marginLeft: curentUser }}>
      <div className={s.Menu}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          size="small"
          color="secondary"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
              data-key={`${message.key}`}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
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
