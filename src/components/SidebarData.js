import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    key: 'HOME',
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },
  {
    key: 'REPORTS',
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosStats />,
    iconClosed: <FiIcons.FiChevronDown size={20} />,
    iconOpened: <FiIcons.FiChevronUp size={20} />,
    subNav: [
      {
        key: 'REPORT1',
        title: "report1",
        path: "/reports/report1",
        icon: null,
      },
      {
        key: 'REPORT2',
        title: "report2",
        path: "/reports/report2",
        icon: null,
        subMenu: [
          {
            key: 'INVESTMENT_ACCOUNT',
            title: 'Cuentas de inversión',
            path: '/cuentas-inversion',
            icon: null
          },
         
        ]
      },
    ],
  },
  {
    key: 'PRODUCTS',
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
  },
];
