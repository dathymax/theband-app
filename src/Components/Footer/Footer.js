import './Footer.css';
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__social-icons">
                <i className="fa fa-facebook-official footer__social-icon"/>
                <i className="fa fa-instagram footer__social-icon"/>
                <i className="fa fa-snapchat footer__social-icon"/>
                <i className="fa fa-pinterest-p footer__social-icon"/>
                <i className="fa fa-twitter footer__social-icon"/>
                <i className="fa fa-linkedin footer__social-icon"/>
            </div>
            <div className="footer__copyright">
                <p className="copyright">Powered by <u>w3.css</u></p>
            </div>
        </div>
    )
}

export default Footer;