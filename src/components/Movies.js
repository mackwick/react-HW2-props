// the component function
const Faves = (props) => {
  //The Components Returned JSX
  return (
    <div className="faves">
      <img src={props.image} height={300} />
      <h1>{props.name}</h1>
      <span>
        Released: {props.year} | Rated: {props.rating}
      </span>
    </div>
  );
};

// export the component
export default Faves;
