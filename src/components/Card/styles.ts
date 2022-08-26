import styled from "styled-components";
import { colors } from "styles/GlobalStyle";

export const Card = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    margin: 8.5rem 0 3.5rem;
  }
  nav {
    margin-top: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5em;
        a {
          text-decoration: none;
          font-size: 1.4rem;
          background-color: ${colors.primary};
          color: ${colors.white};
          padding: 0.6rem 4rem;
          border-radius: 1rem;
          width: 4rem;
          margin-left: 0.5rem;
        }
      }
    }
  }
`
