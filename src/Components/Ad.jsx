import React from "react";

export default function Ad(props) {
  if (!props.ad) {
    return null;
  }
  return (
    <div>
      <img
        src={require("../img/5thUMC.svg").default}
        alt="광고이미지"
        style={{ width: "100vw" }}
      ></img>
    </div>
  );
}

// import React from "react";

// export default function Ad() {
//   return (
//     <div>
//       <img
//         src={require("../img/5thUMC.svg").default}
//         alt="광고이미지"
//         style={{ width: "100vw" }}
//       />
//     </div>
//   );
// }
