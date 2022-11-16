import ModelStyles from './styles/Model.styled'
import DownArrow from '../assets/down-arrow.svg'

export interface ModelProps {
    indice: number
    produto: {
        id: number
        titulo: string
        descricao: string
        imagem: string
    }
}

const Model: React.FC<ModelProps> = ({ produto, indice }) => {

    const idCss = produto.titulo.split(" ").join("").toLowerCase()

    return ( 
        <ModelStyles bgImg={`/src/assets/${produto.imagem}`}>
            <div className="container" id={idCss}>
                <div className='nome-descricao'>
                    <h1>{ produto.titulo }</h1>
                    <p>{ produto.descricao }</p>
                </div>

                <div className='botoes'>
                    <button style={ { backgroundColor: "#3B3D41", color: "#fff"} }>
                        { idCss === "solarpanels" || idCss === "solarroof" ? "Order Now" : "Custom Order" }
                    </button>
                    <button style={ { backgroundColor: "#E7E8E6", color: "#393C41"} }>
                        { idCss === "solarpanels" || idCss === "solarroof" ? "Learn More" : "Existing Inventory" }
                    </button>
                </div>

                {
                    indice === 0 ? 
                        <img
                            src={DownArrow}
                            className='seta-baixo'
                            alt=""
                        /> 
                    : null
                }
           
            </div>
        </ModelStyles>
     );
}
 
export default Model;