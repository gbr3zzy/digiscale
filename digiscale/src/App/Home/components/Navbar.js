import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SideMenuData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const data = useSelector(state => state);
    const showSidebar = () => setSidebar(!sidebar);

    console.log('data', data.selectedProduct.length);

    return (
        <>
            <div className='navbar'>

                <div className="col-2 menu-bars">
                    <Link to='#' className="menu-bar-Icon">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <div class="col-6 container justify-content-center">

                    <button className='navbar-btn'>Self Destruct</button>

                </div>
                <div className="col-2 shoppingBagDiv">
                    <FaIcons.FaShoppingBasket size={30} color={'yellow'} />
                    <label className="IconShoppingBaskit">{data.selectedProduct.length}</label>


                </div>
                <div className="col-2 logoutDiv">
                    <FaIcons.FaSignOutAlt size={30} color={'lightgreen'} />
                </div>

            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle row align-items-center'>
                        <Link to='#' className='menu-bars-header col' >
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        <Link to='#' className='menu-bars col' >
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;