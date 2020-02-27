import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'element-react';


const HeadMenu = () => {
    return (
        <Menu defaultActive="1" className="el-menu-demo" mode="horizontal">
          <Link to="/">
            <Menu.Item index="1">Home</Menu.Item>
          </Link>
          <Link to="/cart">
            <Menu.Item index="3">Cart</Menu.Item>
          </Link>
        </Menu>
    )
}

export default HeadMenu;