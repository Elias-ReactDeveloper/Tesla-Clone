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
                <img src={Logo} alt="" />
                <ul>
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panels</li>
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