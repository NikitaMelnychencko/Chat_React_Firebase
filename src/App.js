import { PureComponent } from 'react';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import SendBox from 'components/SendBox/SendBox';
import AuthForm from 'components/Modal/AuthForm';
class App extends PureComponent {
  state = {
    showModal: false,
    message: null,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleFormSubmit = message => {
    this.setState({ message });
  };

  render() {
    // console.log(this.state.showModal);

    return (
      <>
        <Header onClick={this.toggleModal} />
        <Main></Main>
        <Footer>
          <SendBox onSubmit={this.handleFormSubmit} />
        </Footer>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <AuthForm onClose={this.toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}
export default App;
