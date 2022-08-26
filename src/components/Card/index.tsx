import React from "react";
import { ICard } from "interfaces/card.interface";
import * as S from "./styles";
import { Link } from "react-router-dom";

const Card = ({ dados }: ICard) => {
    return(
        <S.Card>
            {dados && (
                <div key={dados.id}>
                    <img src={dados.img} alt="imagens" />
                </div>
            )}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Teste gratuito</Link>
                    </li>
                    <li>
                        <Link to="/login">Fazer login</Link>
                    </li>
                    <li>
                        <Link to="/login">Novo cadastro</Link>
                    </li>
                </ul>
            </nav>
        </S.Card>
    );
};

export default Card;