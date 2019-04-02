import React, { Component } from 'react';
import LoginPageContainer from './containers/loginPageContainer'
import MenuComponent from './components/menuComponents'
class App extends Component {
  render() {
    return (
      <div >
        <MenuComponent />
        {/* < LoginPageContainer /> */}
      </div>
    );
  }
}

export default App;
