import React from 'react';

interface MovieCardProps {
  movie: any;
  addToFavorite: (movie: any) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, addToFavorite }) => {
  return (
    <div className="movie-card p-4 border rounded-lg shadow-lg bg-white">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
      <h3 className="text-xl mt-2 font-bold">{movie.title}</h3>
      <p className="text-gray-500">{movie.release_date}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => addToFavorite(movie)}
      >
        Add to Favorite
      </button>
    </div>
  );
};

export default MovieCard;
