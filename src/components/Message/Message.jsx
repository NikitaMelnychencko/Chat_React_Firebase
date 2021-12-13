import { PureComponent } from 'react';
import MessageItem from './Message_Item';
import s from './Massage.module.scss';
import { toast } from 'react-toastify';
import { ref, onValue } from 'firebase/database';
import { db } from 'firebaseServise/Init';
import { getUser } from 'firebaseServise/data_featch';
import { nanoid } from 'nanoid';

class Message extends PureComponent {
  state = {
    message: [],
  };
  componentDidMount() {
    const starCountRef = ref(db, 'message');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      console.log(data);
      const arr = [];
      for (let now in data) {
        arr.push(data[now].message);
      }
      this.setState({ message: arr });
    });
  }

  render() {
    const { message } = this.state;
    return (
      <ul className={s.MassageList}>
        {message.map(elm => (
          <MessageItem key={nanoid()} message={elm} />
        ))}
      </ul>
    );
  }
}

export default Message;
