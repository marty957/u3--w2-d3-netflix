import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const Params = useParams();
  console.log(Params);

  const fecthSingleMovie = () => {
    fetch(`http://www.omdbapi.com/?i=${Params.imdbID}&apikey=b001b4f4`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((film) => {
        setMovie(film);
        console.log(movie);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fecthSingleMovie();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <Card>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
