import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-family: 'Alegreya Sans';
        font-weight: 400;
    }
`

export const colors = {
    primary: "#9BD6E9",
    secondary: "#2BC2F1",
    white: "#ffffff",
    black: "#000000",
}

