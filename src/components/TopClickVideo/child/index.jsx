import React from "react";
import "./index.css";

const TopClickedVideo = ({ item }) => {
  const { imageUrl, label, clickCount } = item;
  return (
    <div className="main-div">
      <div>
        {imageUrl && (
          <img width="35" height="25" src={imageUrl} alt="videoImg" />
        )}
      </div>
      <div className="label">{label}</div>
      <div className="click-count">{clickCount}</div>
    </div>
  );
};

export default TopClickedVideo;
