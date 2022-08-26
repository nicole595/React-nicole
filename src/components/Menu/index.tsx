import React from "react";
import { GiLotus } from "react-icons/gi";
import * as S from "./styles";
import { Link } from "react-router-dom";
import lotus from "assets/img/lotus.png"


const Menu = () => {
    return(
        <S.Cabecalho>
            <picture>
                <Link to="/">
                    <img src={lotus} alt="imagem lotus"/>
                </Link>
            </picture>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/cadastrar">Cadastrar</Link>
                    </li>
                </ul>
            </nav>
        </S.Cabecalho>
    );
};

export default Menu;