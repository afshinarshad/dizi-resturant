import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="dizi__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />
    <div className="dizi__footer-links">
      <div className="dizi__footer-links_contact">
        <h1 className="dizi__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Iranshahr shomali, Mousa Kalantari street, n#52, Tehran, Iran
        </p>
        <p className="p__opensans">+98 21 8881 0008</p>
      </div>

      <div className="dizi__footer-links_logo">
        <img src={images.dizilogo} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="dizi__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="dizi__footer-links_work">
        <h1 className="dizi__footer-headtext">Working Hours</h1>
        <p className="p__opensans">All Days of week </p>
        <p className="p__opensans">12:00 PM - 12:00 AM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 DZ. All Rights reserved.</p>
      <p className="p__opensans">designed & developed : Afshin Arshad</p>
    </div>
  </div>
);

export default Footer;
