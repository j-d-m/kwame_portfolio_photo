import React from "react";

import { Link } from "react-router-dom";
function Work() {
  return (
    // <div className="Container-work">
    <div className="Work">
      <figure className="itemGallery">
        <Link to="/ruth">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <figcaption>Ruth</figcaption>
        </Link>
      </figure>

      <figure className="itemGallery">
        <Link to="/great-outdoors">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <figcaption>The Great Outdoors</figcaption>
        </Link>
      </figure>

      <figure className="itemGallery">
        <Link to="/residents-of-brighton">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <figcaption>Residents Of Brighton</figcaption>
        </Link>
      </figure>

      <figure className="itemGallery">
        <Link to="/urban-sport">
          <img src="https://picsum.photos/200/300?random=1" alt="img" />
          <figcaption>Urban Sport</figcaption>
        </Link>
      </figure>
    </div>
    // </div>
  );
}

export default Work;
