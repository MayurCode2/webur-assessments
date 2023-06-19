import React from "react";
import "./Card.scss";

function Card() {
  return (
    <div>
      <div className="heading-text">
        <p>Here how it works</p>
        <h1 className="h-1">Simple process to start </h1>
      </div>
      <div className="card-wraper">
        <div className="card-container-1">
          <div className="card-1">
            <img
              className="card-img"
              src="./web-design 1.svg"
              alt="card"
            />
            <h1 className="card-h">Digital analysis</h1>
            <p className="card-p">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard ,
            </p>
          </div>
        </div>

        <div className="card-container-1">
          <div className="card-1">
            <img
              className="card-img"
              src="./web-design 1-1.svg"
              alt="card"
            />
            <h1 className="card-h">Digital marketing</h1>
            <p className="card-p">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard,
            </p>
          </div>
        </div>

        <div className="card-container-1">
          <div className="card-1">
            <img
              className="card-img"
              src="./web-design 1-2.svg"
              alt="card"
            />
            <h1 className="card-h">Email marketing</h1>
            <p className="card-p">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
