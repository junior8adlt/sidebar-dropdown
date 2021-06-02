import React, { useState } from "react";
import { Link } from "react-router-dom";
export const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
     <li className="sidebarItem">
     <Link
        to={item.path}
        className='sidebarTwoLink'
        onClick={item.subNav && showSubnav}
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
      </Link>
     </li>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} className='dropdownLink'>
              {item.icon}
              <span className="link-text">
               {item.title}
             </span>
            </Link>
          );
        })}
    </>
  );
};
