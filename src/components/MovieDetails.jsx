import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [review, setReview] = useState({});
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

  const fetchComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + Params.imdbID, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MGI5YzhhZDEyOTAwMTU4NzZiYzQiLCJpYXQiOjE3MzMzMjg5OTcsImV4cCI6MTczNDUzODU5N30.PmLzPt1hv_zJJOuBhh9z7KJmK1XanSvGNttSmEAvyKs"
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((comments) => {
        console.log(comments);
        setReview(comments);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fecthSingleMovie();
    fetchComment();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="d-flex justify-content-center">
          <Card>
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>

              {review ? <Card.Body>{review.comment}</Card.Body> : ""}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
