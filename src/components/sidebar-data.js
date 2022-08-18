import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiOutlineDashboard />,
  },
  {
    title: "Categories",
    path: "/categories",
    icon: <MdIcons.MdOutlineCategory />,
  },
  {
    title: "Top Menu",
    path: "/topmenu",
    icon: <BsIcons.BsMenuButtonFill />,
  },
  {
    title: "Pages",
    path: "/pages",
    icon: <RiIcons.RiPagesLine />,
  },
  {
    title: "Posts",
    path: "/posts",
    icon: <MdIcons.MdPostAdd />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Add New",
        path: "/posts/new",
        icon: <FaIcons.FaBookMedical />,
      },
      {
        title: "Manage Posts",
        path: "/post/manage",
        icon: <MdIcons.MdOutlineManageSearch />,
      },
      {
        title: "Archived Posts",
        path: "/post/archive",
        icon: <RiIcons.RiArchiveDrawerLine />,
      },
    ],
  },
  {
    title: "Tags",
    path: "/tags",
    icon: <FaIcons.FaTags />,
  },
  {
    title: "Latest Comments",
    path: "/comments",
    icon: <AiIcons.AiOutlineComment />,
  },
  {
    title: "Users",
    path: "/users",
    icon: <FaIcons.FaUsersCog />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "All Users",
        path: "/users/all",
        icon: <FaIcons.FaUsers />,
      },
      {
        title: "Banned Users",
        path: "/users/manage",
        icon: <FaIcons.FaUserSlash />,
      },
      {
        title: "Register User",
        path: "/users/new",
        icon: <FaIcons.FaUserPlus />,
      },
    ],
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <MdIcons.MdSettings />,
  },
];
