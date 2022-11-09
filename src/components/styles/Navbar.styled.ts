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
        width: 1000px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
    }

    img {
        width: 120px;
        height: 24px;
    }

    ul {
        display: flex;
    }
    ul li {
        list-style: none;
        margin: 0 10px;
    }
`

export default NavbarStyles