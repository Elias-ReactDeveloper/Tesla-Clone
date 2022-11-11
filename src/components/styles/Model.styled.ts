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
        align-items: center;
    }

    .nome-descricao {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 40px;

        position: absolute;
        top: 150px;

        opacity: 0;

        animation-name: model-h1;
        animation-duration: .3s;
        animation-delay: .5s;
        animation-fill-mode: forwards;
    }
    
    p {
        font-size: 14px;
        
        position: absolute;
        top: 200px;

        opacity: 0;

        animation-name: model-p;
        animation-duration: .3s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    }

    .botoes {
        position: absolute;
        bottom: 100px;
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

    .botoes button:first-child{
        opacity: 0;

        animation-name: botao-esquerdo;
        animation-duration: .5s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    }

    .botoes button:last-child {
        opacity: 0;

        animation-name: botao-direito;
        animation-duration: .5s;
        animation-delay: 1s;
        animation-fill-mode: forwards;
    }

    .seta-baixo {
        width: 30px;
        height: 30px;
        
        position: absolute;
        bottom: 30px;

        animation: seta 3s ease-in infinite;
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

        .botoes button:first-child,
        .botoes button:last-child {
            animation: none;
            opacity: 1;
        }
        .botoes {
            animation-name: botoes-600px;
            animation-duration: .3s;
            animation-delay: 1s;
            animation-fill-mode: forwards;
            opacity: 0;
        }


        
    }

    /* ANIMAÇÕES */
    @keyframes seta {
        0% {
            bottom: 30px;
        }
        
        10% {
            bottom: 25px;
        }

        20% {
            bottom: 30px;
        }

        30% {
            bottom: 26px;
        }

        40% {
            bottom: 30px;
        }

        100% {
            bottom: 30px;
        }
    }

    @keyframes model-h1 {
        from {
            opacity: 1;
            top: 180px;
        }
        to {
            top: 150px;
            opacity: 1;
        }
    }

    @keyframes model-p {
        from {
            opacity: 1;
            top: 230px;
        }
        to {
            top: 200px;
            opacity: 1;
        }
    }

    @keyframes botao-direito {
        from {
            margin-left: 30px;
            opacity: 0;
        }
        to {
            margin-left: 5px;
            opacity: 1;
        }
    }

    @keyframes botao-esquerdo {
        from {
            margin-right: 30px;
            opacity: 0;
        }
        to {
            margin-right: 5px;
            opacity: 1;
        }
    }

    @keyframes botoes-600px {
        from {
            bottom: 80px;
            opacity: 0;
        }
        to {
            bottom: 100px;
            opacity: 1;
        }
    }

  
`

export default ModelStyles