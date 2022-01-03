import { PureComponent } from 'react';
import { toast } from 'react-toastify';
import { postUserData } from 'firebaseServise/data_featch';
import { serverTimestamp } from 'firebase/database';

import s from './SendBox.module.scss';

class SendBox extends PureComponent {
  state = {
    message: '',
  };

  handleNameChange = e => {
    this.setState({ message: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.message.trim() === '') {
      toast.warn('Input message!');
      return;
    }

    const dataUser = {
      text: this.state.message,
      userId: sessionStorage.getItem('userId'),
      userName: sessionStorage.getItem('userName'),
      time: serverTimestamp(),
    };
    postUserData(sessionStorage.getItem('userId'), dataUser);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form className={s.Form} onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          autoComplete="off"
          autoFocus
          className={s.Input}
          value={this.state.message}
          onChange={this.handleNameChange}
        />
        <button type="submit" className={s.Button}>
          {' '}
          Send
        </button>
      </form>
    );
  }
}

export default SendBox;
