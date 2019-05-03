import React from "react";
import profilePicture from "../../../static/assets/images/bio/testImage.jpg";

export default function() {
  return (
    <div className="content-page-wrapper ">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        image
      </div>
      <div className="right-column">
        <h1>About text goes here...</h1> Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam auctor sapien eget iaculis dignissim. Morbi sed
        metus ullamcorper, euismod elit in, tincidunt nisl. Nulla malesuada est
        arcu, nec bibendum lacus viverra ut. Suspendisse potenti. Aenean felis
        nulla, porta eget felis id, sagittis efficitur ante. Sed bibendum magna
        sed risus tempus scelerisque. 
      </div>
    </div>
  );
}
