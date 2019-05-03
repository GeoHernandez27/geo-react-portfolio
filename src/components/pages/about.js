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
        sed risus tempus scelerisque. Etiam ornare dolor at justo imperdiet,
        vitae aliquam est porta. Maecenas eleifend lacus ante, eu viverra elit
        rutrum nec. Suspendisse ornare porta purus, ut lobortis enim malesuada
        a. Duis rhoncus nulla sed iaculis accumsan. Nulla sit amet orci in nisi
        luctus venenatis. Cras quis gravida dolor. Quisque dapibus ac odio non
        mattis. Etiam consectetur, diam eu tincidunt tempor, turpis ex pharetra
        ex, sed dictum nibh tellus et massa. Duis pellentesque pharetra massa et
        fermentum. In bibendum, augue nec lacinia vehicula, magna metus congue
        metus, in tempor odio leo sed leo. Suspendisse potenti. Aliquam eget ex
        metus. Fusce iaculis, quam vitae fermentum laoreet, erat mauris dictum
        turpis, vel ultricies urna turpis eget velit.
      </div>
    </div>
  );
}
