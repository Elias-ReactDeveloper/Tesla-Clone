import { useState } from "react";

import NavbarStyles from "./styles/Navbar.styled";
import ManuLateral from "./MenuLateral";
import Logo from '../assets/logo.svg'

const Navbar = () => {

    const [menuLateralAberto, setMenuLateralAberto] = useState<Boolean>(false)

    return ( <div>
        
        { menuLateralAberto && 
            <ManuLateral 
                menuLateralAberto={menuLateralAberto} 
                setMenuLateralAberto={setMenuLateralAberto}
            /> 
        }

        <NavbarStyles>
            <div className="container">
                <a href="http://localhost:5173"><img src={Logo} alt="" /></a>
                <ul>
                    <li><a href="http://localhost:5173/#models">Model S</a></li>
                    <li><a href="http://localhost:5173/#model3">Model 3</a></li>
                    <li><a href="http://localhost:5173/#modelx">Model X</a></li>
                    <li><a href="http://localhost:5173/#modely">Model Y</a></li>
                    <li><a href="http://localhost:5173/#solarroof">Solar Roof</a></li>
                    <li><a href="http://localhost:5173/#solarpanels">Solar Panels</a></li>
                </ul>
                <ul>
                    <li>Shop</li>
                    <li>Account</li>
                    <li onClick={() => setMenuLateralAberto(true)}>Menu</li>
                </ul>
                <ul className="menu-1200">
                    <li onClick={() => setMenuLateralAberto(true)}>Menu</li>
                </ul>
            </div>
        </NavbarStyles>
    </div> );
}
 
export default Navbar;