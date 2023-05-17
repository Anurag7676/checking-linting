import React from "react";
import TopClickedVideo from "../child";
import "./index.css";

const TopclickContainer = () => {
  const data = [
    {
      imageUrl: "https://picsum.photos/id/1/200/200",
      label: "Asus-17-3-isddssdsddsdssddddssddsnch-G",
      clickCount: 125,
    },
    {
      imageUrl: "https://picsum.photos/id/2/200/200",
      label: "Asus-17-3-inch-G",
      clickCount: 125,
    },
    {
      imageUrl: "https://picsum.photos/id/3/200/200",
      label: "Asus-17-3-inch-G",
      clickCount: 125,
    },
    {
      imageUrl: "https://picsum.photos/id/4/200/200",
      label: "Asus-17-3-inch-G",
      clickCount: 125,
    },
    {
      imageUrl: "https://picsum.photos/id/3/200/200",
      label: "Asus-17-3-inch-G",
      clickCount: 125,
    },
    {
      imageUrl: "https://picsum.photos/id/4/200/200",
      label: "Asus-17-3-inch-G",
      clickCount: 125,
    },
  ];

  return (
    <div className="parent-container">
      <div className="top-heading">Top Clicked Video</div>
      <div className="child-container">
        {data.map((item) => (
          <TopClickedVideo key={item.label} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TopclickContainer;
