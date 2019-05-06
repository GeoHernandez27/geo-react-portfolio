import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialFollow = () => {
  return (
    <div className="social-container">
      <a  src="../static/assets/images/logos/github.svg" />
      <a src="../static/assets/images/logos/linkedin.svg" />
      <FontAwesomeIcon icon="envelope" />
    </div>
  );
};

export default SocialFollow;


//TODO
//fix render bug in chrome
//href="https://github.com/GeoHernandez27"
