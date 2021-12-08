import { PureComponent } from 'react';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import SendBox from 'components/SendBox/SendBox';
class App extends PureComponent {
  state = {
    status: 'offline',
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
    return (
      <>
        <Header status={this.state.status} onClick={this.toggleModal}></Header>
        <Main></Main>
        <Footer>
          <SendBox onSubmit={this.handleFormSubmit} />
        </Footer>
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
export default App;
