import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movies";
import movies from "./favemovies";

function App() {
  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      {movies.map((v) => {
        return (
          <Movie
            image={v.image}
            name={v.name}
            rating={v.rating}
            year={v.year}
          />
        );
      })}
    </div>
  );
}

export default App;
