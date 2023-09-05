import React, {useContext, useState} from "react";
import { AppContext } from "./Context";
import {FaTimes} from 'react-icons/fa';
import sublinks from "../data";
import SubLinks from "./SubLinks";

const Sidebar = () => {
    const {toggleSidebar, toggleSidebarHandler} = useContext(AppContext);
    const [sideLinks, setSideLinks] = useState(sublinks);
    return(
        <aside className={`${toggleSidebar ? (
            'sidebar-wrapper show'
        ): (
            'sidebar-wrapper'
        )}`}>
            <div className="sidebar">
                <button className="close-btn" onClick={toggleSidebarHandler}>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    {sideLinks.map((link, index) => {
                        return(
                            <SubLinks key={index} page={link.page} links={link.links}/>
                        )
                    })}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;