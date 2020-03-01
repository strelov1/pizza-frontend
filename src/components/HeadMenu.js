import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'element-react';
import { CartIcon } from './CartIcon';
import { SwitchLanguage } from './SwitchLanguage';


const HeadMenu = () => {
    return (
        <Menu defaultActive="1" className="menu" mode="horizontal">
            <Menu.Item index="1">
                <Link to="/" className="logo_text">
                    <img src="/img/logo.svg" alt="logo" className="logo"/>
                    <span>Pizza Test</span>
                </Link>
            </Menu.Item>
            
             <Menu.Item index="3" className="cart">
                <Link to="/cart">
                   <CartIcon/>
                </Link>
             </Menu.Item>

             <Menu.Item index="2" className="currency">
                <SwitchLanguage/>
             </Menu.Item>
             <Menu.Item index="4" className="menu_history">
                <Link to="/history">
                   <span>Order history</span>
                </Link>
             </Menu.Item>
        </Menu>
    )
}

export default HeadMenu;