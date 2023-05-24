import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="dizi__specialMenu flex__center section__padding" id="menu">
    <div className="dizi__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Online Menu</h1>
    </div>

    <div className="dizi__specialMenu-menu">
      <div className="dizi__specialMenu-menu_cuisines  flex__center">
        <p className="dizi__specialMenu-menu_heading">Cuisines</p>
        <div className="dizi__specialMenu_menu_items">
          {data.cuisines.map((cuisine, index) => (
            <MenuItem
              key={cuisine.title + index}
              title={cuisine.title}
              price={cuisine.price}
              tags={cuisine.tags}
            />
          ))}
        </div>
      </div>

      <div className="dizi__specialMenu-menu_img">
        <img src={images.abali} alt="menu__img" />
      </div>

      <div className="dizi__specialMenu-menu_drinks  flex__center">
        <p className="dizi__specialMenu-menu_heading">side dishes</p>
        <div className="dizi__specialMenu_menu_items">
          {data.drinks.map((drink, index) => (
            <MenuItem
              key={drink.title + index}
              title={drink.title}
              price={drink.price}
              tags={drink.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
