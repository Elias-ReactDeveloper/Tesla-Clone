import styled from 'styled-components'
import Model from '../Model'

import { ModelProps } from '../Model'

const ModelStyles = styled.div<ModelProps>`
    
    width: 100%;
    height: 100vh;
    
    .container {
        background-image: url(${(props) => props.bgImg});
        height: 100%; 
        background-position: center;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        font-size: 40px;
        text-align: center;
    }
    
    p {
        font-size: 14px;
        text-align: center
    }

    button {
        width: 264px;
        height: 40px;
        margin: 0 12px;

        border: none;
        border-radius: 4px;

        font-weight: bold;
        font-size: 14px;
    }

    .seta-baixo {
        width: 30px;
        height: 30px;
        
        position: absolute;
        bottom: 30px;
    }

    @media(max-width: 820px) and (min-width: 630px) {
        button {
            width: 190px;
            height: 40px;
        }
    }

    @media(max-width: 600px) {
        .botoes {
            width: 100%;
        }
        button {
            display: block;
            width: 90%;
            margin: 10px auto;
        }
    }

  
`

export default ModelStyles