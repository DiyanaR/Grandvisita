import React from "react";

const VideoBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: "-1",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          minWidth: "100%",
          minHeight: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* <source src="/images/video5.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
