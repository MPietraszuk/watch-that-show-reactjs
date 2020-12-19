import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  state = { message: 'Yoo, React !!!!' }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
