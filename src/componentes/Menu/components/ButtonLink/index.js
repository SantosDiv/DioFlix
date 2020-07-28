import React from 'react';
function ButtonLink(props) {
    //props => { claseName: "O que alguem passar", href:""}
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
           {props.children}
        </a>
    );
}

export default ButtonLink; //Show