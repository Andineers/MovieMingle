import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY; 
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchMovieDetails = async () => {
  try {
    const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchMovie =  () => {
 const [data, setData] = useState([])
  useEffect(() =>{
const response = fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(response => (response.json())).then(response => {
  console.log(response)
  setData(response)
})
  },[])
  return data
};



