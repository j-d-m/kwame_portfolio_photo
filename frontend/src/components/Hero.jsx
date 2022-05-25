import React from "react";
import Masonry from "react-masonry-css";

export default function Hero() {
  let items = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/200",
  ];
  return (
    <div className="hero">
      <div className="quote">
        <p>
          And I said this, “I fuckin’ hate being poor.” And my <br /> dad got
          really upset. He didn’t scream or howl. That <br /> wasn’t his way. He
          just threw his newspaper on the <br /> floor, and he said, “David,
          David, David. You are not <br /> poor.” He said, “Poor is a
          mentality.” He said, “It’s a <br /> mentality that very few people
          ever recover from.
          <br />
          Don’t you forget it, son. You are broke.”
        </p>
      </div>

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {items.map((currentValue) => {
          console.log(currentValue);
          return <img src={currentValue} />;
        })}
      </Masonry>
      {/* <main>
        <div class="item-1">
          <img src="https://picsum.photos/300/600/?random" />
        </div>
        <div className="item-2">
          <h1>2</h1>
        </div>
        <div className="item-3">
          <h1>3</h1>
        </div>
        <div className="item-4">
          <h1>4</h1>
        </div>
        <div class="item-5">
           <img src="https://picsum.photos/200/400/?random" /> 
          <h1>5</h1>
        </div>
        <div className="item-6">
          <img src="https://picsum.photos/200/250/?random" />
          <h1>6</h1>
        </div>
        <div class="item-7">
          <img src="https://picsum.photos/200/100/?random" />
        </div>
        <div class="item-8">
          <img src="https://picsum.photos/200/600/?random" />
        </div>
      </main> */}
    </div>
  );
}
