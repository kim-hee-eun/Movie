import "./CSS/Header.css";

import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import React from "react";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="headerItem">
        <img
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <Link to="/movies" className="headerItem">
        영화
      </Link>
      <Link to="/tv" className="headerItem">
        TV 프로그램
      </Link>
      <Link to="/celebrity" className="headerItem">
        인물
      </Link>
      <LoginBtn />
    </div>
  );
}
