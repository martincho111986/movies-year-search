import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// buscador de peliculas por año
function App() {
  const [year, setYear] = useState(null);
  const [movies, setMovies] = useState([]);
  const [textSearch, setTextSearch] = useState(
    "Buscar pelicula peliculas por Año"
  );

  const handleChange = (e) => {
    setYear(e.target.value * 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://jsonmock.hackerrank.com/api/moviesdata?Year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.length === 0) {
          setMovies(data.data);
          return setTextSearch("No Results Found");
        }
        setMovies(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <div className="container">
      <form action="" className="form-container" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          name="search"
          className="search-bar"
          data-testid="app-input"
        />
        <button data-testid="submit-button" type="submit" className="search-btn">
          Search
        </button>
      </form>
      {movies.length === 0 ? (
        <div className="no-data" data-testid="no-result">
          {textSearch}
        </div>
      ) : (
        <div className="results-container">
          {movies.map((movie) => (
            <ul key={movie.imdbID} data-testid="movieList">
              <li>
                {movie.Title} - {movie.Year}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
