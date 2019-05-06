import React from "react";
import PortfolioContainer from "../portfolio/portfolio-container";

export default function() {
  return (
    <div>
      <div className="background-image">
        <div className="text-wrapper">
          <h1>Hi there...</h1>
          <h3>let's design your next digital adventure.</h3>
        </div>
      </div>
      <div className="portfolioItems-header-wrapper">
        <h1>Latest Projects</h1>
        </div>

      <PortfolioContainer />
    </div>
  );
}
