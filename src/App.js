import React from 'react';
import Drawer from './components/Drawer';
import NavBar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  
  render() { 
    return (  
      <React.Fragment>
          <Drawer/>
          <NavBar/>
          <Home/>
      </React.Fragment>
    );
  }
}
 
export default App;