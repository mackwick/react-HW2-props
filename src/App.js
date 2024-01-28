import logo from "./logo.svg";
import "./App.css";
import Faves from "./components/Movies";

function App() {
  const movies = [
    {
      name: "Star Wars Episode IV: A New Hope",
      year: "1977",
      rating: "PG",
      image: "https://i.imgur.com/rtBP9SK.jpeg",
    },
    {
      name: "Star Wars Episode V: The Empire Strikes Back",
      year: "1980",
      rating: "PG",
      image: "https://i.imgur.com/oThr5IT.jpeg",
    },
    {
      name: "Star Wars Episode VI: Return of the Jedi",
      year: "1983",
      rating: "PG",
      image: "https://i.imgur.com/n6uJl6B.jpeg",
    },
    {
      name: "Eternal Sunshine of the Spotless Mind",
      year: "2004",
      rating: "R",
      image: "https://i.imgur.com/OfkiPTU.jpeg",
    },
    {
      name: "Practical Magic",
      year: "1998",
      rating: "PG-13",
      image: "https://i.imgur.com/ZsYoSNv.jpeg",
    },
  ];
  return (
    <div className="App">
      {movies.map((v) => {
        return (
          <Faves
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
