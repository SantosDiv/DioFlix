import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
//Biblioteca que faz todo o props automártico: styled-components
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
               <img className="Logo" src={Logo} alt="DioFlix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu; //Show