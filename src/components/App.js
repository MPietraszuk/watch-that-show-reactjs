import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import MovieCard from './MovieCard';
import MovieList from './MovieList';

class App extends Component {
  state = { message: 'Yoo, React !!!!' }
  render() {
    return (
      <div>
        <Header />
        {/* <Home /> */}
        {/* <MovieCard /> */}
        <div className="container">
          <MovieList />
        </div>

      </div>
    );
  }
}

export default App;
