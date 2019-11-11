import React from 'react';
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
                    <a href="" className="article-nav-button">Read The Article</a>
                </div>
            </div>
        </section>
    )
}