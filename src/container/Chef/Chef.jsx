import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="dizi__chef dizi__bg dizi__wrapper section__padding">
    <div className="dizi__wrapper_img dizi__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="dizi__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="dizi__chef-content">
        <div className="dizi__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          First and foremost, we believe in using only the freshest and
          highest-quality ingredients in our dishes. We source our meats, beans,
          vegetables, and spices from local suppliers whenever possible,
          ensuring that our food is not only delicious but also supports our
          community. We also believe in creating a welcoming and hospitable
          atmosphere for our customers. Our staff is friendly and attentive, and
          we strive to make everyone feel like part of our extended family. We
          want our restaurant to be a place where people can come to relax,
          enjoy great food, and connect with others. Finally, we are committed
          to sustainability and minimizing our environmental impact. We use
          eco-friendly practices whenever possible, from composting and
          recycling to reducing food waste and conserving energy. By doing so,
          we hope to contribute to a healthier planet and a better future for
          all.
        </p>
      </div>

      <div className="dizi__chef-sign">
        <p>Haj Abbas</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
