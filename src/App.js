import { PureComponent } from 'react';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import SendBox from 'components/SendBox/SendBox';
import AuthForm from 'components/Modal/AuthForm';
import { auth, user } from './firebaseServise/Init';
import { onAuthStateChanged } from 'firebase/auth';
class App extends PureComponent {
  state = {
    showModal: false,
    message: null,
    online: sessionStorage.getItem('userId') === null ? false : true,
  };

  componentDidUpdate() {
    return onAuthStateChanged(auth, user => {
      if (user) {
        const userId = user.uid;
        return sessionStorage.setItem('userId', `${userId}`);
        // this.props.onlineCheck();
      } else {
        return;
      }
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = message => {
    this.setState({ message });
  };

  onlineCheck = () => {
    this.setState(({ online }) => ({
      online: sessionStorage.getItem('userId') === null ? false : true,
    }));
  };

  render() {
    // console.log(this.state.showModal);

    return (
      <>
        <Header
          onClick={this.toggleModal}
          online={this.state.online}
          onlineCheck={this.onlineCheck}
        />
        <Main></Main>
        <Footer>
          <SendBox onSubmit={this.handleFormSubmit} />
        </Footer>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <AuthForm
              onClose={this.toggleModal}
              onlineCheck={this.onlineCheck}
            />
          </Modal>
        )}
      </>
    );
  }
}
export default App;
