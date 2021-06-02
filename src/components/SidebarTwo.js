import React, { useState } from 'react'
import * as CgIcons from "react-icons/cg";
import * as IoIcons from "react-icons/io";
import * as HiIcons from 'react-icons/hi'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from "./SidebarData";
import { SubMenu } from "./SubMenu";
import './SidebarTwo.css'

export const SidebarTwo = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
           <nav className={`sidebarTwo ${sidebar ? "open" : ""}`}>
            <ul className="sidebarNavTwo">
            <li className="sidebarItem">
             <span href="#" className="sidebarTwoLink sidebarAction">
             {sidebar ? (<CgIcons.CgMoveLeft size={30} onClick={showSidebar} />): 
             (<CgIcons.CgMoveRight size={30} onClick={showSidebar} />)}
             </span>
             </li>
             {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
             })}
          <li className="sidebarItem">
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
            </ul>
           </nav>
        </>
    )
}
