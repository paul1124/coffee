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
                    <hr className="service-divide"/>
                    <div className="service-nonimg">
                    <h3 className="service-name">Website Design</h3>
                    <p className="service-description">Let the customers experience what their visit to your Caf&#233; will be like. Simple and clean websites that reflects on the ambiance of the caf&#233; is a good entrance point to showcase your caf&#233; online.</p>
                    </div>
                </div>
                <div className="service">
                    <img src={seo} alt="" className="service-img"/>
                    <hr className="service-divide"/>
                    <div className="service-nonimg">
                    <h3 className="service-name">SEO</h3>
                    <p className="service-description">Bring up your caf&#233; on top of Google search when people look for local coffee shops. Unique banners that induce people to be curious. Be representative caf&#233; in your area.</p>
                    </div>
                </div>
                <div className="service">
                    <img src={sns} alt="" className="service-img"/>
                    <hr className="service-divide"/>
                    <div className="service-nonimg">
                    <h3 className="service-name">Social Media</h3>
                    <p className="service-description">Invite people to interact with your caf&#233; through Social Media. Posting contents, following people, hashtagging, etc. serves as user friendly interface with the customers.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}