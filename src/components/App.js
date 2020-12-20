import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  state = { message: 'Yoo, React !!!!' }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/movies" component={MovieList} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
