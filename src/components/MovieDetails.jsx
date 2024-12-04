import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const Params = useParams();
  console.log(Params);

  const fecthSingleMovie = () => {
    fetch(`http://www.omdbapi.com/?i=${Params.imdbID}&apikey=b001b4f4`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fecthSingleMovie();
  }, []);
};

export default MovieDetails;
