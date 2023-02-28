import React from 'react';
import CSSModules from 'react-css-modules';
import style from './style.module.scss';


function Header() {
    return (
        <div styleName="wrapper" >
            <div styleName="header-wrapper" >
                <div styleName="header-logo">
                    <img src="../assets/logo.png" alt="logo" styleName="header-logo-pic" />
                    <p>WordBook</p>
                </div>
                {/* <div styleName="header__hamburger hamburger">
                    <div styleName="hamburger__line"></div>
                    <div styleName="hamburger__line"></div>
                    <div styleName="hamburger__line"></div>
                    <div styleName="hamburger__line"></div>
                </div> */}
                <nav styleName="nav">
                    <ul styleName="nav-list">
                        <li styleName="nav-item">
                            <a href="#welcome" styleName="nav-link">Главная</a>
                        </li>
                        <li styleName="nav-item">
                            <a href="#dictionary" styleName="nav-link">Словарь</a>
                        </li>
                        <li styleName="nav-item">
                            <a href="#training" styleName="nav-link">Тренировка</a>
                        </li>
                        <li styleName="nav-item">
                            <a href="#contacts" styleName="nav-link">Контакты</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default CSSModules(Header, style);
