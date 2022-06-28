import React from "react";

import { Link } from "react-router-dom";
function Work() {
  return (
    <div className="Container-work">
      <div className="Work">
        <Link to="/ruth">
          <img src="https://picsum.photos/600/700" alt="img" />
          <h2></h2>
        </Link>
        <Link to="/great-outdoors">
          <img src="https://picsum.photos/id/237/600/700" alt="img" />
          <h2></h2>
        </Link>
        <Link to="/residents-of-brighton">
          <img src="https://picsum.photos/seed/picsum/600/700" alt="img" />
          <h2></h2>
        </Link>
        <Link to="/urban-sport">
          <img src="https://picsum.photos/600/700?grayscale" alt="img" />
          <h2></h2>
        </Link>
      </div>
    </div>
  );
}

export default Work;
