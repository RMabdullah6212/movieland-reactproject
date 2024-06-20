

import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ReactPlayer from 'react-player';
import './app.css';
import SearchIcon from './search.svg';

const API_KEY = '60e9619236a823d3cfd1a256e42c0559';
const SEARCH_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);

    const searchMovies = async (title) => {
        try {
            const response = await fetch(`${SEARCH_API_URL}${title}`);
            const data = await response.json();
            if (data && data.results) {
                setMovies(data.results);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            setMovies([]);
        }
    };

    useEffect(() => {
        searchMovies('superman');
    }, []);

    const handleMovieClick = (movie) => {
        // Replace with the YouTube video link you want to play
        const videoUrl = 'https://www.youtube.com/watch?v=nYPJIOF0ys4';

        setSelectedMovie({ ...movie, videoUrl });
    };
    const handleReset = () => {
        setSearchTerm('');
        searchMovies('spiderman');
        setSelectedMovie(null);
    };
    
    return (
        <div className="app">
            
            <a href="#!" onClick={handleReset}>
                <h1>MOVIE LAND</h1>
            </a>
            
            <div className="search">
                <input 
                    placeholder="Search For Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {selectedMovie ? (
                <div className="player-wrapper">
                    <ReactPlayer
                        className="react-player"
                        url={selectedMovie.videoUrl}
                        controls={true}
                        playing={true}
                        width="100%"
                        height="100%"
                    />
                    <button onClick={() => setSelectedMovie(null)}>Close Player</button>
                </div>
            ) : (
                <div className="container">
                    {movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
                        ))
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default App;

