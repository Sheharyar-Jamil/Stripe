import React from "react";
import Links from "./Links";

const SubLinks = (props) => {
    return(
        <article>
            <h4>{props.page}</h4>
            <div className="sidebar-sublinks">
                {props.links.map((item, index) => {
                    return(
                        <Links key={index} label={item.label} icon={item.icon} url={item.url}/>
                    )
                })}
            </div>
        </article>
    );
};

export default SubLinks;