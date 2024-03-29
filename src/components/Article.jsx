import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import img from './images/article/article.jpeg';
import './styles/article.scss';

export default function Article() {
    return (
        <section className="article" id="article">
            <div className="article-container">
                <div className="article-header">
                    <img className="article-header-img" src={img} alt="article"/>
                    <h3 className="article-header-title">Importance of Web Presence for Caf&#233;</h3>
                </div>
                <div className="article-nav">
                    <a href="https://medium.com/@paulhong1124/importance-of-web-presence-for-caf%C3%A9-8354139e2fa5" className="article-nav-button">Read The Article <FontAwesomeIcon className="i" icon={faChevronRight} /></a>
                </div>
            </div>
        </section>
    )
}