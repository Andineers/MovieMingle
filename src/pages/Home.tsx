import { useEffect } from "react";
import { fetchMovie, fetchMovieDetails } from "../services/tmdbApi";

const Home: React.FC = () => {

  const data = fetchMovie()
  console.log(data)
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  };
  
  export default Home;  
  