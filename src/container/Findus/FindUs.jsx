import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Findus.css'

const FindUs = () => (
  <div className="dizi__findus dizi__bg dizi__wrapper section__padding" id="contact" >
    <div className="dizi__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="dizi__wrapper-content">
        <p className="p__opensans">
          Iranshahr Shomali, Mousa Kalantari Street, N#52, Tehran, Iran{" "}
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">All Days Of Week </p>
        <p className="p__opensans">12:00 PM - 12:00 AM</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="dizi__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
