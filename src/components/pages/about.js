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
        <h1>“New site, who dis?”</h1>

        <p>
          Hey there! Thank you for stopping by. My name is Geo Hernandez and I
          am a design-oriented Front End Developer based out of Utah. I believe
          that an application not only needs to look great but also be simple
          and functional. I love meeting new people so let’s collaborate and embark on your next digital
          adventure!
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
        
      </div>
    </div>
  );
}
