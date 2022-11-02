import { FcReuse } from "react-icons/fc";
import { GiLotus } from "react-icons/gi";
import * as S from "./styles";
import { Link, useNavigate } from "react-router-dom";
import lotus from "assets/img/lotus.png"
import { useAuth } from "hooks/authHook";
const Menu = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <S.Cabecalho>
      <picture>
                <Link to="/">
                    <img src={lotus} alt="imagem lotus"/>
                </Link>
            </picture>
      <nav>
        {
          user ? (
            <ul>
               <li>
                <Link to="/adm/message">Mensagem</Link>
              </li>
              <li>
              <button onClick={logout}>{user.name} <GiLotus /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          )
        }
      </nav>
    </S.Cabecalho >
  );
};
export default Menu;
