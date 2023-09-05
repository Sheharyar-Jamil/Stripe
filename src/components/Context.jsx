import React, { createContext, useState } from "react";
import sublinks from "../data";

const AppContext = createContext();

const AppProvider = (props) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page: '', links: []})

  const toggleSidebarHandler = () => {
    {
      toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
    }
  };

  const toggleSubmenuHandler = (text, coordinates) => {

    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    {
      toggleSubmenu ? setToggleSubmenu(false) : setToggleSubmenu(true);
    }
  };

  const closeSubmenu = () => {
    setToggleSubmenu(false);
  }
  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        toggleSubmenu,
        toggleSidebarHandler,
        toggleSubmenuHandler,
        location,
        page,
        closeSubmenu
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
