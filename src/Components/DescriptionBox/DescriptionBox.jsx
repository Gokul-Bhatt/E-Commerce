import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="Descriptionbox">
      <div className="Descriptionbox-navigator">
        <div className="Descriptionbox-nav-box">Description</div>
        <div className="Descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="Descriptionbox-description">
        <p>
          Ecommerce is a method of buying and selling goods and services online.
          The definition of ecommerce business can also include tactics like
          affiliate marketing. You can use ecommerce channels such as your own
          website, an established selling website like Amazon, or social media
          to drive online sales.
        </p>
        <p>
          Ecommerce can be defined as the buying and selling of goods
          electronically online. Its popular because of the many benefits of
          e-business -internet marketing, electronic funds transfer, mobile
          commerce – this is broken up into two parts.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
