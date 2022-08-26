import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Section = styled.section`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
        color: ${colors.black};
        font-weight: 600;
        margin-top: 4rem;
        margin-bottom: 2rem;
        font-size: 2rem;
    }
    form {
        background-color: ${colors.primary};
        border-radius: 1rem;
        padding: 2rem;
        label {
            font-size: 1.2rem;
        }
        div {
            background-color: ${colors.white};
            border-radius: 0.6rem;
            display: flex;
            margin: 0.5rem 0;
            input {
                width: 100%;
                font-size: 1rem;
                border: 0;
                background-color: transparent;
                padding: 0.5rem;
            }
        }
        p{
            margin-top: 1rem;
            a{
                font-size: 1.2rem;
                text-decoration: none;
                color : ${colors.black};
                font-weight: bold;
            }
        }
    }
`