import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './Header.css';
import '../css/grid.css';

const Header = () => {
    return (
        <>
            <div className="header">
                <nav className="nav">
                    <ul className="nav__items">
                        <li className="nav__item">
                            <a href="#home" className="nav__item--link">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#band" className="nav__item--link">Band</a>
                        </li>
                        <li className="nav__item">
                            <a href="#tour" className="nav__item--link">Tour</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__item--link">Contact</a>
                        </li>
                        <li className="nav__item">
                            <a href="#more" className="nav__item--link">
                                More
                                <i className="fa fa-caret-down nav__item--icon"/>
                            </a>
                            <ul className="subnav__items">
                                <li className="subnav__item">
                                    <a href="# " className="subnav__item--link">
                                        Merchandise
                                    </a>
                                </li>
                                <li className="subnav__item">
                                    <a href="# " className="subnav__item--link">
                                        Extras
                                    </a>
                                </li>
                                <li className="subnav__item">
                                    <a href="# " className="subnav__item--link">
                                        Media
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="header__search">
                        <a href="# " className="header__search--link">
                            <i className="fa fa-search header__search--icon"/>
                        </a>
                    </div>
                </nav>
            </div>
            <input type="checkbox" hidden id="nav__mobile-input"/>

            <div className="nav__mobile">
                <ul className="nav__mobile-items">
                    <li className="nav__mobile-item">
                        <a href="#home" className="nav__mobile--link">Home</a>
                    </li>
                    <li className="nav__mobile-item">
                        <a href="#band" className="nav__mobile--link">Band</a>
                    </li>
                    <li className="nav__mobile-item">
                        <a href="#tour" className="nav__mobile--link">Tour</a>
                    </li>
                    <li className="nav__mobile-item">
                        <a href="#contact" className="nav__mobile--link">Contact</a>
                    </li>
                    <li className="nav__mobile-item">
                        <a href="# " className="nav__mobile--link">Merch</a>
                    </li>
                </ul>
            </div>
            <label for="nav__mobile-input" className="fa fa-bars nav__mobile-btn nav__mobile-menu">
                {/* <i className="fa fa-bars nav__mobile-btn"/> */}
            </label>
        </>
    )
}

export default Header;