import { useEffect, useState } from "react";
import { Col, Row, Image, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleRow = ({ title }) => {
  /*   state = {
    movies: [],
    isLoading: false
  };
 */
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMovies = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b001b4f4&s=" + title)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((movie) => {
        setMovies(movie.Search);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  /* const { movies } = this.state; */

  return (
    <>
      <Row>
        <h2 className="my-3 fs-1">{title}</h2>
        {isLoading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        {movies.slice(0, 6).map((movie) => (
          <Col sm={12} md={4} lg={2} key={`movie${movie.imdbID}`} className="mb-2 text-center px-1">
            <Link to={"/movie-details/" + movie.imdbID}>
              <Image src={movie.Poster} alt="poster" className="img-fluid" />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SingleRow;
