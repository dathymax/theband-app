import './Home.css';
import React from 'react';
import backGround from '../img/slider/slider1.jpg';

const Home = () => {
    return (
        <div className="home" id="home">
            <img src={backGround} alt="back-ground" className="home__bg"/>
            <div className="home__section">
                <h2 className="home__title">Los Angeles</h2>
                <p className="home__description">We had the best time playing at Venice Beach!</p>
            </div>
        </div>
    )
}

export default Home;