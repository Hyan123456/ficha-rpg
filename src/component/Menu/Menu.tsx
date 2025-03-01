import React from "react";
import style from "./Menu.module.scss";
import logo from "../../assets/logo.jpg"
import {Link} from "react-router-dom"

export default function Menu() {
    const rotas = [{
       label: 'Home',
       to:'/' 
    },{
        label: 'Tormenta20',
        to: '/T20'
    } 
    
    ];
    return (
        <div className={style.menuList}>
            <nav>
                <ul>
                    <img src={logo} className={style.menuLogo} alt="logo" />
                    {rotas.map((rotas, index) =>(
                        <li key={index} className={style.menuLink}>
                            <Link to={rotas.to}>
                                {rotas.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}