import React from 'react';
import design from './images/services/service-design.jpeg';
import seo from './images/services/service-seo.jpeg';
import sns from './images/services/service-sns.jpeg';
import './styles/services.scss';

export default function Services() {
    return (
        <section className="services" id="services">
            <h2 className="services-title">Services</h2>
            <div className="services-container">
                <div className="service">
                    <img src={design} alt="" className="service-img"/>
                    <h3 className="service-name">Website Design</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nemo.</p>
                </div>
                <div className="service">
                    <img src={seo} alt="" className="service-img"/>
                    <h3 className="service-name">SEO</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nemo.</p>
                </div>
                <div className="service">
                    <img src={sns} alt="" className="service-img"/>
                    <h3 className="service-name">Social Media</h3>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nemo.</p>
                </div>
            </div>
        </section>
    )
}