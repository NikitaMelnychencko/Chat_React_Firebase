import { PureComponent } from 'react';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
class App extends PureComponent {
  state = {
    status: 'offline',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Header status={this.state.status} onClick={this.toggleModal}></Header>
        <Main></Main>
        <Footer></Footer>
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
}
export default App;
