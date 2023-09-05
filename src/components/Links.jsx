import React from "react";

const Links = (props) => {
  return (
    <div className=" sidebar-sublinks">
      <a href={props.url}>
        {props.icon}
        {props.label}
      </a>
    </div>
  );
};

export default Links;
