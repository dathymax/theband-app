import './Tour.css';
import React from 'react';
import NewYork from '../img/places/newyork.jpg';
import Paris from '../img/places/paris.jpg';
import SanFran from '../img/places/sanfran.jpg';

const Tour = () => {
    return (
        <div className="tour" id="tour">
            <div className="tour__container">
                <div className="tour__heading">
                    <h2 className="tour__title">Tour dates</h2>
                    <p className="tour__description">Remember to book your tickets</p>
                </div>
                <br/>
                <div className="tour__sold">
                    <div className="tour__sold-item">
                        <span className="tour__sold-month">September</span>
                        <span className="tour__sold-sold-out">Sold out</span>
                    </div>
                    <div className="tour__sold-item">
                        <span className="tour__sold-month">October</span>
                        <span className="tour__sold-sold-out">Sold out</span>
                    </div>
                    <div className="tour__sold-item">
                        <span className="tour__sold-month">November</span>
                        <span className="tour__sold-number">3</span>
                    </div>
                </div>
                <div className="tour__places">
                    <div className="grid">
                        <div className="row">
                            <div className="col l-4 m-12 c-12 tour__places-item">
                                <img src={NewYork} alt="New York" className="tour__place-img"/>
                                <div className="tour__places-details">
                                    <p className="tour__places--country-name">New York</p>
                                    <p className="tour__places--date">Fri 27 Nov 2016</p>
                                    <p className="tour__places--details">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                    <a href="# " className="tour__places--link">Buy Tickets</a>
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12 tour__places-item">
                                <img src={Paris} alt="Paris" className="tour__place-img"/>
                                <div className="tour__places-details">
                                    <p className="tour__places--country-name">Paris</p>
                                    <p className="tour__places--date">Sat 28 Nov 2016</p>
                                    <p className="tour__places--details">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                    <a href="# " className="tour__places--link">Buy Tickets</a>
                                </div>
                            </div>
                            <div className="col l-4 m-12 c-12 tour__places-item">
                                <img src={SanFran} alt="SanFrancisco" className="tour__place-img"/>
                                <div className="tour__places-details">
                                    <p className="tour__places--country-name">SanFrancisco</p>
                                    <p className="tour__places--date">Sun 29 Nov 2016</p>
                                    <p className="tour__places--details">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                                    <a href="# " className="tour__places--link">Buy Tickets</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tour;