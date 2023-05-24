import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="dizi__header dizi__wrapper section__padding" id="home">
    <div className="dizi__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="dizi__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
         Welcome To Our Traditional Dizi Restaurant! We Are Proud To Offer Our
        Customers An Authentic Taste Of Iranian Cuisine, With A Focus On The
        Beloved Dish Of Dizi. Our Restaurant Is Built On A Foundation Of
        Quality, Community, And Sustainability.<br/>Dizi is a traditional Persian
        dish made with lamb, chickpeas, white beans, tomatoes, potatoes, and
        onions. The ingredients are slow-cooked in a clay pot called a dizi
        until they become tender and blend together to create a thick stew. Once
        cooked, the solid ingredients are mashed together with a pestle and
        served with the broth in individual bowls. It's often accompanied by
        flatbread and fresh herbs, and is a popular comfort food in Iran.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="dizi__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
