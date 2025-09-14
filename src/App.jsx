import { useEffect, useState } from "react";
import Movie from "./components/Movie";

const API_URL = `http://www.omdbapi.com?apikey=${import.meta.env.VITE_API_KEY}`;

const movie1 = {
  "Title":"Not Movie Found",
  "Year": "Nil",
  "imdbID": "tt2586634",
  "Type": "Nil",
  "Poster": "N/A"
}

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="container">
        <div className="content">
          <div className="header">
            <h1>Movie Finder</h1>
            <div className="search">
              <input 
                type="text"
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img 
                src="src/assets/search-button-svg.svg"
                alt="search"
                onClick={() => searchMovies(searchTerm)}
              />
            </div>
          </div>

          <div className="movies-container">
            {
              movies.length <= 0
                ? (
                  <>
                    <Movie movie={movie1}/>
                  
                  </>
                ) : (
                  movies.map((movie) => (
                    <Movie movie={movie} key={movie.imdbID} />
                  ))
                )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
