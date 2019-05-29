import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <h1>About text goes here...</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          auctor sapien eget iaculis dignissim. Morbi sed metus ullamcorper,
          euismod elit in, tincidunt nisl. Nulla malesuada est arcu, nec
          bibendum lacus viverra ut. Suspendisse potenti. Aenean felis nulla,
          porta eget felis id, sagittis efficitur ante. Sed bibendum magna sed
          risus tempus scelerisque.oreet, erat mauris dictum turpis, vel
          ultricies urna turpis eget velit.
        </p>

        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
            <div className="text">GeoHernadez27</div>
          </div>
        </div>
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </div>
            <div className="text">geo-hernandez</div>
          </div>
        </div>
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">guillermo.hernandez0392@gmail.com</div>
          </div>
        </div>
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="file-alt" />
            </div>
            <div className="text">Resume</div>
          </div>
        </div>
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="text">Lehi,UT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
