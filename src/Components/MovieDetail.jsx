import "./CSS/MovieDetail.css";

import { useLocation, useParams } from "react-router-dom";

export default function MovieDetail() {
  //url로 넘겨 받은 title
  const { title } = useParams();
  //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
  //이미지, 별점 등의 모든 정보들
  const { state } = useLocation();
  console.log(title);
  console.log(state.description);

  return (
    <div id="movie-detail">
      <div id="movie-detail-image">
        <img
          src={`https://image.tmdb.org/t/p/w300${state.poster}`}
          alt="movie poster"
          style={{ width: "280px", height: "450px" }}
        ></img>
      </div>
      <div id="movie-detail-contents">
        <div id="movie-detail-contents-header">
          <h1>{title}</h1>
          <p>평점 : {state.grade}</p>
          <br />
        </div>
        <div id="movie-detail-contents-description">
          <h4>줄거리</h4>
          <p>{state.description}</p>
        </div>
      </div>
    </div>
  );
}
