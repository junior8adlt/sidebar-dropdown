import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SubMenu.css";
export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link
        to={item.path}
        className='sidebarLink'
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <label>{item.title}</label>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} className='dropdownLink'>
              {item.icon}
              <label>{item.title}</label>
            </Link>
          );
        })}
    </>
  );
};
