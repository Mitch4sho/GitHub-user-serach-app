import React from "react";

export default function IconComponent({ prop, icon }) {
  return (
    <li>
      <p>
        <img src={icon} alt="Icon" />
        {prop ? prop : "Not Available"}
      </p>
    </li>
  );
}
