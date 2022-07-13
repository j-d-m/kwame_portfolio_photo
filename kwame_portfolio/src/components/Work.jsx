import React from "react";

import { Link } from "react-router-dom";
function Work() {
  return (
    // <div className="Container-work">
    <div className="Work">
      <div className="itemGallery">
        <Link to="/ruth">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <h2>Ruth</h2>
        </Link>
      </div>
      <div className="itemGallery">
        <Link to="/great-outdoors">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <h2>The Great Outdoors</h2>
        </Link>
      </div>
      <div className="itemGallery">
        <Link to="/residents-of-brighton">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <h2>Residents Of Brighton</h2>
        </Link>
      </div>
      <div className="itemGallery">
        <Link to="/urban-sport">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <h2>Urban Sport</h2>
        </Link>
      </div>
    </div>
    // </div>
  );
}

export default Work;
