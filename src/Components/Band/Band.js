import './Band.css';
import React from 'react';
import memberImg from '../img/band/bandmember1.jpg';
import '../css/grid.css';

const Band = () => {
    return (
        <div className="band" id="band">
            <div className="band__heading">
                <h2 className="band__title">The band</h2>
                <p className="band__description">We love music</p>
            </div>
            <div className="band__detail">
                <p className="band__detail-content">
                We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="band__member-items">
                <div className="grid">
                    <div className="row">
                        <div className="col l-4 m-12 c-12">
                            <div className="band__member-item">
                                <p className="band__member-name">Name</p>
                                <img src={memberImg} alt="member-img" className="band__member-img"/>
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12">
                            <div className="band__member-item">
                                <p className="band__member-name">Name</p>
                                <img src={memberImg} alt="member-img" className="band__member-img"/>
                            </div>
                        </div>
                        <div className="col l-4 m-12 c-12">
                            <div className="band__member-item">
                                <p className="band__member-name">Name</p>
                                <img src={memberImg} alt="member-img" className="band__member-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Band;