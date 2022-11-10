import NavbarStyles from "./styles/Navbar.styled";

import Logo from '../assets/logo.svg'

const Navbar = () => {
    return ( <NavbarStyles>
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
                <li>Menu</li>
            </ul>

            <ul className="menu-1200">
                <li>Menu</li>
            </ul>
        </div>
    </NavbarStyles> );
}
 
export default Navbar;