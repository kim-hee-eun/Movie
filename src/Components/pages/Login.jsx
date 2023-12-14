import "../CSS/Login.css";

import React from "react";
import { useState } from "react";

export default function Login() {
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const regexPw =
    /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showWarningEmail, setShowWarningEmail] = useState("none");
  const [showWarningPassword, setShowWarningPassword] = useState("none");
  const [btnColor, setBtnColor] = useState("lightgrey");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (emailRegEx.test(event.target.value) === false) {
      setShowWarningEmail("block");
    } else {
      setShowWarningEmail("none");
    }
    handleSubmitBtn();
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (regexPw.test(event.target.value) === false) {
      setShowWarningPassword("block");
    } else {
      setShowWarningPassword("none");
    }
    handleSubmitBtn();
  };

  const handleSubmitBtn = () => {
    if (emailRegEx.test(email) && regexPw.test(password)) {
      setBtnColor("navy");
    } else {
      setBtnColor("lightgrey");
    }
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <form className="login-form">
          <h2>이메일과 비밀번호를 입력해주세요</h2>
          <label className="login-form-label">이메일 주소</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-form-input"
            onChange={handleEmailChange}
            placeholder="이메일을 입력하세요"
          ></input>
          <div className="warning-msg" style={{ display: showWarningEmail }}>
            올바른 이메일을 입력해주세요.
          </div>
          <label className="login-form-label">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-form-input"
            onChange={handlePasswordChange}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          ></input>
          <div className="warning-msg" style={{ display: showWarningPassword }}>
            비밀번호 형식이 올바르지 않습니다.
          </div>
          <button className="ok-btn" style={{ backgroundColor: btnColor }}>
            확인
          </button>
        </form>
      </div>
    </div>
  );
}
