import styled from "styled-components";

const NavbarStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
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
    }

    ul li:hover {
        background-color: #C2CDD8;
        border-radius: 5px;
    }
`

export default NavbarStyles