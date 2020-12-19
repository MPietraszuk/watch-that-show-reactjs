import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
    state = { movies: 
        [{
            "Title": "Iron Man",
            "Year": "2008",
            "imdbID": "tt0371746",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
            },
            {
            "Title": "Iron Man 3",
            "Year": "2013",
            "imdbID": "tt1300854",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
            },
            {
            "Title": "Iron Man 2",
            "Year": "2010",
            "imdbID": "tt1228705",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
            },
            {
            "Title": "The Man in the Iron Mask",
            "Year": "1998",
            "imdbID": "tt0120744",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjM2YzcxMmQtOTc2Mi00YjdhLWFlZjUtNmFmMDQzYzU2YTk5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
            "Title": "The Man with the Iron Fists",
            "Year": "2012",
            "imdbID": "tt1258972",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTg5ODI3ODkzOV5BMl5BanBnXkFtZTcwMTQxNjUwOA@@._V1_SX300.jpg"
            },
            {
            "Title": "Tetsuo: The Iron Man",
            "Year": "1989",
            "imdbID": "tt0096251",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODYxZTIwMWQtZTdiMS00ODRmLThlODEtNjkwNmE1ZTY1ZjM1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
            },
            {
            "Title": "The Man with the Iron Heart",
            "Year": "2017",
            "imdbID": "tt3296908",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMWZkZjRkOTYtMmVhZC00NGFhLWE0ZmUtOGFhOTg4ZmRkNDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
            },
            {
            "Title": "The Invincible Iron Man",
            "Year": "2007",
            "imdbID": "tt0903135",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGRmZDg1YjMtMDA5YS00OTFjLTgyMjQtNDgzNTIyNzAwZDg0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
            "Title": "Iron Man: Rise of Technovore",
            "Year": "2013",
            "imdbID": "tt2654124",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNGJkNDQwNzUtNWE0MC00MGVjLWFjMjEtODMyNTExMTU4ZDRhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
            {
            "Title": "The Man with the Iron Fists 2",
            "Year": "2015",
            "imdbID": "tt3625152",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BODkyMTMwMjA0Nl5BMl5BanBnXkFtZTgwMzQ3MDc4NDE@._V1_SX300.jpg"
            }
        ]}
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