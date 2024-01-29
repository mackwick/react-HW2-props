// the component function
const Movie = (props) => {
  //The Components Returned JSX
  return (
    <div className="movie">
      <img src={props.image} height={300} />
      <h2>{props.name}</h2>
      <span>
        Released: {props.year} | Rated: {props.rating}
      </span>
    </div>
  );
};

// export the component
export default Movie;
