import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosStats />,
    iconClosed: <FiIcons.FiChevronDown />,
    iconOpened: <FiIcons.FiChevronUp />,
    subNav: [
      {
        title: "report1",
        path: "/reports/report1",
        icon: null,
      },
      {
        title: "report2",
        path: "/reports/report2",
        icon: null,
      },
    ],
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
];
