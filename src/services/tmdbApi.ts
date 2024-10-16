import axios from 'axios';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Ganti dengan API Key Anda
const BASE_URL = 'https://api.themoviedb.org/3';

// Ambil film yang sedang diputar (Now Playing)
export const getNowPlayingMovies = async (limit: number = 6) => {
  const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results.slice(0, limit);
};

// Ambil film populer dengan pagination
export const getPopularMovies = async (page: number = 1) => {
  const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
  return response.data.results;
};
