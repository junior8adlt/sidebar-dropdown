import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
     <li className="sidebarItem">
     <NavLink
        to={item.path}
        className='sidebarTwoLink'
        onClick={item.subNav && showSubnav}
        activeClassName='is-active'
      >
          {item.icon}
          <span className="link-text">
               {item.title}
          </span>
        <div className="dropdownIcon">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>
     </li>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <NavLink to={item.path} key={index} className='dropdownLink' activeClassName='is-active'>
              {item.icon}
              <span className="link-text">
               {item.title}
             </span>
            </NavLink>
          );
        })}
    </>
  );
};
