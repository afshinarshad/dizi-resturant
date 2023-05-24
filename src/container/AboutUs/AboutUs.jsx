import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="dizi__aboutus dizi__bg flex__center section__padding"
    id="about"
  >
    <div className="dizi__aboutus-overlay flex__center">
      <img src={images.DZ} alt="G_overlay" />
    </div>

    <div className="dizi__aboutus-content flex__center">
      <div className="dizi__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Dizi is a popular restaurant located in Tehran, Iran. It specializes
          in traditional Iranian cuisine, particularly the dish "dizi," which is
          a type of lamb stew. The restaurant has a cozy and welcoming
          atmosphere and is known for its delicious food and friendly service.
          Customers can enjoy a variety of dishes, including stews, kebabs, and
          rice dishes. The prices are reasonable, and the portions are generous.
          Overall, Dizi is a great choice for anyone looking to experience
          authentic Iranian cuisine in a comfortable and welcoming environment.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="dizi__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="dizi__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our restaurant has a rich history spanning 50 years and is known for
          serving delicious Dizies to Our customers. Over the years, Our
          restaurant has become a beloved local landmark, attracting customers
          who appreciate the authentic flavors and warm hospitality that us
          provide.
          <br />
          As a result of your commitment to quality and authenticity, your
          restaurant has built a loyal following of customers who return time
          and time again to enjoy your delicious food and welcoming atmosphere.
          Congratulations on 50 years of success, and here's to many more years
          of serving up delicious Dizies to your satisfied customers!
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
