import ModelStyles from './styles/Model.styled'

import DownArrow from '../assets/down-arrow.svg'

export interface ModelProps {
    bgImg: string
}

const Model: React.FC<ModelProps> = ({ bgImg }) => {
    return ( 
        <ModelStyles bgImg={bgImg}>
            <div className="container">
                <div style={ { marginTop: "170px" } }>
                    <h1>Model 3</h1>
                    <p>Order Online for <u>Touchless Delivery</u></p>
                </div>

                <div className='botoes' style={ { marginBottom: "110px" } }>
                    <button style={ { backgroundColor: "#3B3D41", color: "#fff"} }>Custom Order</button>
                    <button style={ { backgroundColor: "#E7E8E6", color: "#393C41"} }>Existing Inventory</button>
                </div>

             
                <img
                    src={DownArrow}
                    className='seta-baixo'
                    alt=""
                />
           
            </div>
        </ModelStyles>
     );
}
 
export default Model;