// useState 훅을 사용한 코드

import React, { useState } from "react";

import Ad from "./Ad";

export default function AdPage(props) {
  const [showAd, setShowAd] = useState(false);

  const handleToggleClick = () => {
    setShowAd((prevShowAd) => !prevShowAd);
  };
  return (
    <div>
      <Ad ad={showAd} />
      <button onClick={handleToggleClick}>
        {showAd ? "광고 안 보기" : "광고 보기"}
      </button>
    </div>
  );
}

// import Ad from "./Ad";
// import React from "react";

// class AdPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { showAd: false };

//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState((prevState) => ({
//       showAd: !prevState.showAd,
//     }));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.showAd && <Ad />}
//         <button onClick={this.handleToggleClick}>
//           {this.state.showAd ? "광고 안 보기" : "광고 보기"}
//         </button>
//       </div>
//     );
//   }
// }

// export default AdPage;
