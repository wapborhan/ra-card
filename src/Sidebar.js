import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <ProSidebar collapsed={collapsed}>
      <Menu iconShape="square">
        <MenuItem icon={<FaBars />} onClick={toggleSidebar}>
          Toggle Sidebar
        </MenuItem>
        <MenuItem icon={<FaBars />}>
          Dashboard
          <Link to="/dashboard" />
        </MenuItem>
        <SubMenu title="Components" icon={<FaBars />}>
          <MenuItem>
            Submenu 1
            <Link to="/submenu1" />
          </MenuItem>
          <MenuItem>
            Submenu 2
            <Link to="/submenu2" />
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<FaBars />}>
          Settings
          <Link to="/settings" />
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
};

export default Sidebar;
