import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "./Context";

const Submenu = () => {
    const {toggleSubmenu, toggleSubmenuHandler, location, page: {page, links} } = useContext(AppContext);

    const container = useRef(null);
    const [columns, setColumns] = useState('col-2')

    useEffect(() => {
        if(!page){
            return
        }
        setColumns('col-2')
        const submenu = container.current;
        const {center, bottom} = location;
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if(links.length === 3){
            setColumns('col-3');
        }

        if(links.length > 3){
            setColumns('col-4');
        }

    }, [location, links]);

    if(!page){
        return null;
    }
    return(
        <aside className={`${toggleSubmenu ? (
            'submenu show'
        ): (
            'submenu'
        )}`} ref={container}>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {links.map((link, index) => {
                    return(
                        <a href={link.url} key={index}>{link.icon}{link.label}</a>
                    )
                })}
            </div>
        </aside>
    );
};

export default Submenu;