import React, { useState } from 'react'
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as HiIcons from 'react-icons/hi'
import * as FaIcons from 'react-icons/fa'
import * as FiIcons from "react-icons/fi";
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import './SidebarTwo.css'

export const SidebarTwo = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
           <nav className={`sidebarTwo ${sidebar ? "open" : ""}`}>
           <li className="sidebarItem sidebarAction">
             <span className="sidebarTwoLink sidebarActionButton">
             {sidebar ? (<CgIcons.CgMoveLeft size={30} onClick={showSidebar} />): 
             (<CgIcons.CgMoveRight size={30} onClick={showSidebar} />)}
             <span className={!sidebar ? 'd-none' : ''}><span className="blue-text">ADD</span><span className="white-text">IKA</span></span>
             <IoIcons.IoMdNotificationsOutline size={20} className={!sidebar ? 'd-none' : ''}/>
             </span>
             </li>
             <li className="sidebarUser  sidebarItem">
             <span className="sidebarTwoLink sidebarActionButton">
             <FaIcons.FaUser/>
          <span className="link-text">
               Bonequi Addika
          </span>
        <div className="dropdownIcon">
        <FiIcons.FiChevronDown size={20} />
        </div>
             </span>
             </li>
            <ul className="sidebarNavTwo">
             {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} isOpen={sidebar}/>;
             })}
            </ul>
            <li className="sidebarItem h-100">
              {!sidebar ?
            (<span className="sidebarTwoLink">
            <HiIcons.HiDotsHorizontal/>
            </span>):
            ( <div className="settings">
           <IoIcons.IoIosSettings size={16}/>
           <FaIcons.FaClipboardCheck size={16}/>
           <FaIcons.FaRegCalendarAlt size={16}/>
            </div>)
            }
             </li>
           </nav>
        </>
    )
}
