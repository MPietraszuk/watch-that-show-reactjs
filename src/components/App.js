import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import MovieCard from './MovieCard';

class App extends Component {
  state = { message: 'Yoo, React !!!!' }
  render() {
    return (
      <div>
        <Header />
        {/* <Home /> */}
        <MovieCard />

      </div>
    );
  }
}

export default App;
