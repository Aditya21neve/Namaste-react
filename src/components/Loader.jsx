import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional background overlay
      }}
    >
      <FadeLoader
        cssOverride={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        height={17}
        loading
        margin={3}
        radius={3}
        speedMultiplier={1}
        width={7}
      />
    </div>
  );
};

export default Loader;
