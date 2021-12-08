import { PureComponent } from 'react';
import { toast } from 'react-toastify';
import { postUserData } from 'firebaseServise/data_featch';
import { nanoid } from 'nanoid';
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
      userId: '9999',
      userName: 'Niki',
    };
    postUserData('9999', nanoid(), dataUser);
    //this.props.onSubmit(this.state.message);
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
