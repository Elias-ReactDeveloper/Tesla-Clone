import styled from "styled-components";

const NavbarStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    .container {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }

    img {
        width: 120px;
        height: 24px;
        cursor: pointer;

        animation: aparecer 1s;
    }

    ul {
        display: flex;
    }

    ul li {
        list-style: none;

        padding: 8px 12px;

        font-size: 15px;
        font-weight: 600;
        cursor: pointer;

        transition: background-color 0.1s;

        animation: aparecer 1s;
    }

    ul li:hover {
        background-color: #C2CDD8;
        border-radius: 5px;
    }

    .menu-1200 {
        display: none;
    }

    @media(max-width: 1200px) {
        .container {
            width: 100%;
            padding: 0 25px;
        }
        ul {
            display: none;
        }
        .menu-1200 {
            display: initial;

            background-color: #C2CDD8;
            border-radius: 5px;
        }
    }

    @keyframes aparecer {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
   }
`

export default NavbarStyles