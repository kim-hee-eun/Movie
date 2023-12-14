import Description from "./Description";

function TV(props) {
  return (
    <div className="tv">
      <div className="tvImageContainer">
        <img
          className="tvImage"
          src={`https://image.tmdb.org/t/p/w300${props.poster}`}
          alt="poster"
          referrerpolicy="no-referrer"
        />
      </div>
      <div className="tvContent">
        <div className="tvTitle">{props.title}</div>
        <div className="tvGrade">{props.grade}</div>
      </div>
      <Description title={props.title} description={props.description} />
    </div>
  );
}

export default TV;
