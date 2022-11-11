import styled from "styled-components";

const MenuLateral = styled.div`
    .container {
        width: 100%;
        height: 100vh;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

        backdrop-filter: blur(2.5px);
    }

    .menu {
        width: 296px;
        height: 100vh;

        background-color: #fff;
    
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;

        overflow-y: scroll;
    }


    .cabecalho {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 70px;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .fechar {
        width: 20px;
        height: 20px;
        margin-right: 20px;
        cursor: pointer;    
    }

    ul {
        margin-top: 70px;
        padding-bottom: 20px;
    }

    ul li {
        list-style: none;

        margin: 2px 30px;
        padding: 8px;

        border-radius: 4px;

        font-weight: 600;
        font-size: 15px;
        color: #393C41;
        cursor: pointer;
    }

    ul li:hover {
        background-color: #F2F2F2;
    }

`

export default MenuLateral