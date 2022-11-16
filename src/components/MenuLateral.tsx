import MenuLateral from "./styles/MenuLateral.styled";

import CloseIcon from '../assets/close_icon.png'
import { Dispatch, FC, SetStateAction } from "react";

interface IProps {
    menuLateralAberto: Boolean,
    setMenuLateralAberto: Dispatch<SetStateAction<Boolean>>
}

const ManuLateral: FC<IProps> = (props) => {
    return ( 
        <MenuLateral aberto={props.menuLateralAberto}>
            <div className="container">
                <div className="menu">
                    
                    <div className="cabecalho">
                        <img 
                            src={CloseIcon} 
                            onClick={() => props.setMenuLateralAberto(false)} 
                            className="fechar" alt="" 
                        />
                    </div>
        
                    <ul>
                        <li>Existing Inventory</li>
                        <li>Used Inventory</li>
                        <li>Trade-In</li>
                        <li>Test Drive</li>
                        <li>Insurance</li>
                        <li>Cybertruck</li>
                        <li>Roadster</li>
                        <li>Semi</li>
                        <li>Charging</li>
                        <li>Powerwall</li>
                        <li>Commercial Energy</li>
                        <li>Utilities</li>
                        <li>Find Us</li>
                        <li>Support</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
            </div>
        </MenuLateral> );
}
 
export default ManuLateral;