import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialFollow = () => {
  return (
    <div className="social-container">
      <div className="social-box">
        <a target="blank" href="https://github.com/GeoHernandez27">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a target="blank" href="https://www.linkedin.com/in/geo-hernandez">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="mailto:guillermo.hernandez0392@gmail.com">
          <FontAwesomeIcon icon="envelope" />
        </a>
      </div>
    </div>
  );
};

export default SocialFollow;
