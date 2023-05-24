import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="dizi__menuitem">
    <div className="dizi__menuitem-head">
      <div className="dizi__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>
      <div className="dizi__menuitem-dash" />
      <div className="dizi__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="dizi__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
