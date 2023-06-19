import React from "react";
import "./Fetures.scss";

function Fetures() {
  return (
    <div className="fetures-section">
      <div className="text-h-1">
        <p>All Fetures</p>
      </div>
      <div className="features-wrap">
        <div className="feature-text">
          <p className="features-p-1">Web Solutions</p>
          <h1 className="features-h-2">
            Strategics experiences <br /> ad visual appeal
          </h1>
          <p className="features-p-2">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s,simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
          <p className="features-p-3">Read More</p>
        </div>
        <div className="features-img">
          <img src="./Group (2).svg" alt="" />
        </div>
      </div>
      <div>
        <div class="container">
          <div class="report">
            <span class="measure">6</span>
            <div class="comparison">
              <span>Year in Field</span>
            </div>
          </div>
          <div class="report">
            <span class="measure">10+</span>
            <div class="comparison">
              <span>Expertes</span>
            </div>
          </div>
          <div class="report">
            <span class="measure">50+</span>
            <div class="comparison">
              <span>Projects</span>
            </div>
          </div>
          <div class="report">
            <span class="measure">20+</span>
            <div class="comparison">
              <span>Agency Prtners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetures;
