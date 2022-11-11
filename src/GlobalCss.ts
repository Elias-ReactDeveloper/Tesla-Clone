import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.cdnfonts.com/css/gotham-ssm');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, button {
        font-family: 'Gotham SSm', sans-serif;
    }

    h1, p, li, a{
        color: #171A20;
    }

    a {
        text-decoration: none;
    }

`

export default GlobalStyle