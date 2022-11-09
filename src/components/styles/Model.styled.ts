import styled from 'styled-components'
import Model from '../Model'

import { ModelProps } from '../Model'

const ModelStyles = styled.div<ModelProps>`
    
    width: 100vw;
    height: 100vh;
    
    .container {
        background-image: url(${(props) => props.bgImg});
        height: 100%; 
        background-position: center;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .textos {
        text-align: center
    }
`

export default ModelStyles