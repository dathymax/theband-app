import './Contact.css';
import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact__heading">
                <h2 className="contact__title">Contact</h2>
                <p className="contact__description">Fan?Drop a note!</p>
            </div>
            <div className="grid contact__container">
                <div className="row">
                    <div className="col l-6 m-12 c-12">
                        <div className="contact__left">
                            <i className="fa fa-map-marker contact__left-icon"/>
                            <span className="contact__left-details">Chicago, US</span><br/>
                            <i className="fa fa-phone contact__left-icon"/>
                            <span className="contact__left-details">Phone: +00 151515</span><br/>
                            <i className="fa fa-envelope contact__left-icon"/>
                            <span className="contact__left-details">Email: mail@mail.com</span><br/>
                        </div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className="contact__right">
                            <div className="row">
                                <div className="col l-6 m-12 c-12">
                                    <input className="contact__right-input" placeholder="Name" type="text"/>
                                </div>
                                <div className="col l-6 m-12 c-12">
                                    <input className="contact__right-input" placeholder="Email" type="text"/>
                                </div>
                                <div className="col l-12 m-12 c-12">
                                    <input className="contact__right-input" placeholder="Message" type="text"/>
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div className="col l-2 m-0 c-0"></div>
                    <div className="col l-2 m-0 c-0"></div>
                    <div className="col l-2 m-0 c-0"></div>
                    <div className="col l-2 m-0 c-0"></div>
                    <div className="col l-2 m-0 c-0"></div>
                    <div className="col l-2 m-12 c-12">
                        <div className="contact__send">
                            <a href="# " className="contact__send--link">Send</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;