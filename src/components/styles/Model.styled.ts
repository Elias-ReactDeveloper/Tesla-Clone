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

    h1 {
        font-size: 40px;
        text-align: center
    }
    p {
        font-size: 14px;
        text-align: center
    }

    button {
        width: 264px;
        height: 40px;
        border: none;
        margin: 0 12px;
        border-radius: 4px;
        font-weight: bold;
        font-size: 14px;
    }
`

export default ModelStyles