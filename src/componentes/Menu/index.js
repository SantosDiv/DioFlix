import React from 'react';
import { Link } from 'react-router-dom'; /*É esse comando 'Link' do react-router-dom que fará com que criemos um carregamento Fake e não mais nativo. Ou seja, seja carregado uma nova página sem recarregar o Browser*/
import Logo from '../../assets/img/Logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
//Biblioteca que faz todo o props automártico: styled-components
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
               <img className="Logo" src={Logo} alt="DioFlix Logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="./cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; //Show