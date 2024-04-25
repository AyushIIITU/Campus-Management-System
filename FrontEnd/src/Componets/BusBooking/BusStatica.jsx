import React from "react";
import "./BusStatica.scss";

function BusStatica() {
  return (
    <div className="main-container">
      <div className="bus-stand-wrapper">
        <div className="bus-stand-roof"></div>
        <div className="roof-stand"></div>
        <div className="bus-stand-pillar-wrapper">
          <div className="bus-stand-pillar"></div>
          <div className="bus-stand-pillar"></div>
        </div>
        <div className="bus-stand-glass-wrapper">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className="bus-main-wrapper">
        <div className="front-seat-wrapper">
          <div className="front-top">
            <div className="front-glass"></div>
          </div>
          <div className="front-bottom"></div>
          <div className="tool-box-wrapper">
            <div className="tool"></div>
            <div className="tool"></div>
          </div>
        </div>
        <div className="glass-wrapper">
          <div className="window-wrapper">
            <div className="window">
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="window">
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="window">
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="window">
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="window">
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
            <div className="window">
              <div className="seat"></div>
              <div className="seat"></div>
            </div>
          </div>
        </div>
        <div className="headlight-wrap">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="tyre-wrapper">
          <div className="tyre">
            <div className="rim"></div>
          </div>
          <div className="tyre">
            <div className="rim"></div>
          </div>
        </div>
        <div className="tyre-cover-wrapper">
          <div className="tyre-cover"></div>
          <div className="tyre-cover"></div>
        </div>
        <div className="stripe-wrapper">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="sticker">
          <img
            src="http://res.cloudinary.com/dyquku6bs/image/upload/v1463656641/sajhabus_gdifyx.png"
            alt="Sajha Bus"
          />
        </div>
        <div className="white-cutter"></div>
        <div className="bus-light-wrapper">
          <div className="tail-light"></div>
          <div className="side-light-wrapper">
            <div className="side-light"></div>
            <div className="side-light"></div>
            <div className="side-light"></div>
            <div className="side-light"></div>
            <div className="side-light"></div>
          </div>
        </div>
      </div>
      <div className="road-wrapper">
        <div className="road"></div>
        <div className="road-dots">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default BusStatica;
