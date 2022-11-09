import ModelStyles from './styles/Model.styled'

export interface ModelProps {
    bgImg: string
}

const Model: React.FC<ModelProps> = ({ bgImg }) => {
    return ( 
        <ModelStyles bgImg={bgImg}>
            <div className="container">
                <div className='textos'>
                    <h1>Model 3</h1>
                    <p>Order Online for Touchless Delivery</p>
                </div>

                <div className="botoes">
                    <button>Custom Order</button>
                    <button>Existing Inventory</button>
                </div>
            </div>
        </ModelStyles>
     );
}
 
export default Model;