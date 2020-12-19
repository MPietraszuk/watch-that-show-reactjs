import React, { Component } from 'react';

class App extends Component {
  state = { message: 'Yoo, React !!!!' }
  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
      </div>
    );
  }
}

export default App;
