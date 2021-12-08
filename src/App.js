import { PureComponent } from 'react';
import Main from 'components/Main/Main';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SendBox from 'components/SendBox/SendBox';
class App extends PureComponent {
  state = {
    message: null,
  };
  handleFormSubmit = message => {
    this.setState({ message });
  };
  render() {
    return (
      <>
        <Header></Header>
        <Main></Main>
        <Footer>
          <SendBox onSubmit={this.handleFormSubmit} />
        </Footer>
      </>
    );
  }
}
export default App;
