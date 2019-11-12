import React from 'react';
import bannerImg from './images/banner/banner.jpeg';
import './styles/banner.scss';

export default function Banner() {
    return (
        <section className="banner" id="banner">
            {/* <img className="banner-image" src={bannerImg} alt="Banner"/> */}

            <div className="banner-message">
                <h3 className="banner-message-title">Why Caf&#233; Website?</h3>
                <p className="banner-message-text">
                    <strong>"Good" Caf&#233; no longer depend only on the drinks.</strong><br/> Potential customers now seek to experience the unique ambiance, atmosphere, accessibility, and of course, <strong><br/>Drinks</strong>. <br/><br/>
                    My job is to expose your Caf&#233; online for two reasons: <br/>1. Customers can have a trailer of what their visit to your Caf&#233; will be like, and <br/>2. <strong><em>You guys can focus on your drinks.</em></strong>
                    <br/><br/>Learn More from This Article.
                </p>
            </div>
        </section>
    )
}