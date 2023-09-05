import React, { useContext } from "react";
import logo from '../assets/logo.svg';
import {FaBars} from 'react-icons/fa';
import { AppContext } from "./Context";

const Navbar = () => {

    const {toggleSidebarHandler, toggleSubmenuHandler, closeSubmenu} = useContext(AppContext);

    const displaySubmenu = (event) => {
        const page = event.target.textContent;
        const tempBtn = event.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right)/ 2;
        const bottom = tempBtn.bottom - 3;
        toggleSubmenuHandler(page, {center, bottom});
    }

    const submitHandler = (event) => {
        if(!event.target.classList.contains('link-btn')){
            closeSubmenu();
        }
    } 
    return(
        <nav className="nav" onMouseOver={submitHandler}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="stripe" className="nav-logo" />
                    <button className="btn toggle-btn" onClick={toggleSidebarHandler}>
                        <FaBars />
                    </button>
                </div>

                <ul className="nav-links">
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
                    </li>
                    <li>
                        <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;