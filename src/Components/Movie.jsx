import Description from "./Description";
import { useNavigate } from "react-router-dom";

function Movie(props) {
  const navigate = useNavigate();

  const onClickMovie = () => {
    navigate(`/movie/${props.title}`, {
      state: {
        grade: props.grade,
        poster: props.poster,
        description: props.description,
      },
    });
  };
  return (
    <div className="movie" onClick={onClickMovie}>
      <div className="movieImageContainer">
        <img
          className="movieImage"
          src={`https://image.tmdb.org/t/p/w300${props.poster}`}
          alt="poster"
          referrerpolicy="no-referrer"
        />
      </div>
      <div className="movieContent">
        <div className="movieTitle">{props.title}</div>
        <div className="movieGrade">{props.grade}</div>
      </div>
      <Description title={props.title} description={props.description} />
    </div>
  );
}

export default Movie;
