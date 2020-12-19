import Axios from 'axios';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
    state = { movies: [] }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = () => {
        let searchText = "Bruce Lee";
        Axios.get(`http://www.omdbapi.com/?apikey=b51ec88b&s=${searchText}`)
        .then(resp=>resp.data)
        .then(data=>data.Search)
        .then(movies=>this.setState({movies}));
    }
    render() {
        const movieList = this.state.movies.map(m=><MovieCard movie={m} key={m.imdbID} />)
        return (
            <div className="row">
                { movieList }
            </div>
        );
    }
}

export default MovieList;