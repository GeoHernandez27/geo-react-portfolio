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

        <a className="contact-bullet-points" 
        target="blank" href="https://github.com/GeoHernandez27">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </div>
            <div className="text">GeoHernadez27</div>
          </div>
        </a>
        <a className="contact-bullet-points"
        target="blank" href="https://www.linkedin.com/in/geo-hernandez">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </div>
            <div className="text">geo-hernandez</div>
          </div>
        </a>
        <a className="contact-bullet-points"
        href="mailto:guillermo.hernandez0392@gmail.com" >
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="text">guillermo.hernandez0392@gmail.com</div>
          </div>
        </a>
        <a className="contact-bullet-points" 
        href='https://docs.google.com/document/d/e/2PACX-1vST4hSFsOTHKqHgIPRdDfwW61OApispMBc_4C_rUexKkqCVJYUMMoifkqPShh7FkA2OrSGj8sQtSMQU/pub'
        target='_blank'
        >
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="file-alt" />
            </div>
            <div className="text">Resume</div>
          </div>
        </a>
        
      </div>
    </div>
  );
}
