import ModelStyles from './styles/Model.styled'

import DownArrow from '../assets/down-arrow.svg'

export interface ModelProps {
    bgImg: string
}

const Model: React.FC<ModelProps> = ({ bgImg }) => {
    return ( 
        <ModelStyles bgImg={bgImg}>
            <div className="container">
                <div>
                    <h1>Model 3</h1>
                    <p>Order Online for <u>Touchless Delivery</u></p>
                </div>

                <div>
                    <button style={ { backgroundColor: "#3B3D41", color: "#fff"} }>Custom Order</button>
                    <button style={ { backgroundColor: "#E7E8E6", color: "#393C41"} }>Existing Inventory</button>
                </div>
            </div>
        </ModelStyles>
     );
}
 
export default Model;