// useState 훅을 사용한 경우

import React from "react";
import { useState } from "react";

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };
  return (
    <div className="loginControl">
      <button onClick={handleButtonClick} className="loginBtn">
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
      <span className="loginMsg">
        {isLoggedIn ? "환영합니다!" : "로그인해주세요!"}
      </span>
    </div>
  );
}

// import React from "react";

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { isLoggedIn: false };

//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//   }

//   handleLoginClick() {
//     this.setState(() => ({
//       isLoggedIn: true,
//     }));
//   }
//   handleLogoutClick() {
//     this.setState(() => ({
//       isLoggedIn: false,
//     }));
//   }
//   welcomeMsg() {
//     return this.state.isLoggedIn ? (
//       <span className="loginMsg">환영합니다!</span>
//     ) : (
//       <span className="loginMsg">로그인해주세요!</span>
//     );
//   }
//   loginBtn() {
//     return this.state.isLoggedIn ? (
//       <button onClick={this.handleLogoutClick} className="loginBtn">
//         로그아웃
//       </button>
//     ) : (
//       <button onClick={this.handleLoginClick} className="loginBtn">
//         로그인
//       </button>
//     );
//   }

//   render() {
//     return (
//       <div className="loginControl">
//         {this.loginBtn()}
//         {this.welcomeMsg()}
//       </div>
//     );
//   }
// }

// export default LoginControl;
