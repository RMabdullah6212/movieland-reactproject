
import React from "react";

const MovieCard = ({ movie, onMovieClick }) => {
    const posterUrl = movie.poster_path !== 'N/A' ? `http://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/400';
    
    return (
        <div className="movie" onClick={() => onMovieClick(movie)}>
             <div>
                 <p>{movie.release_date}</p>
             </div>
             <div>
                 <img 
                    src={posterUrl} 
                    alt={movie.title} 
                />
            </div>
            <div>
                <span>{movie.original_language}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
