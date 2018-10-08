import React from "react";
import "./SideScroll.css";

const SideScroll = (props) => {
  const {title, opening_crawl, release_date} = props.episodeData;
  return (
    <div className='SideScroll'>
      <p>{opening_crawl}</p>
      <h2>{title}</h2>
      <h3>{release_date}</h3>
    </div>
  );
};

export default SideScroll;
