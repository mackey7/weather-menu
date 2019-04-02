import React, { Component } from 'react';
import LoginPageContainer from './containers/loginPageContainer'
import MenuComponent from './components/menuComponents'
import AdminPage from './components/adminPageComponent'
class App extends Component {
  render() {
    return (
      <div >
        {/* <MenuComponent /> */}
        {/* < LoginPageContainer /> */}
        <AdminPage />
      </div>
    );
  }
}

export default App;
