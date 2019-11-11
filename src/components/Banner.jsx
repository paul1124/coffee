import React from 'react';
import bannerImg from './images/banner/banner.jpeg';
import './styles/banner.scss';

export default function Banner() {
    return (
        <section className="banner" id="banner">
            {/* <img className="banner-image" src={bannerImg} alt="Banner"/> */}

            <div className="banner-message">
                <h3 className="banner-message-title">Make your Drinks. <br/>I'll lure them In.</h3>
            </div>
        </section>
    )
}