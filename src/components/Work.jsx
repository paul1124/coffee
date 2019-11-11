import React from 'react';
import './styles/work.scss';

const works = [
    {
        name: 'one',
        link: 'string',
        img: 'img'
    },
    {
        name: 'two',
        link: 'string',
        img: 'img'
    },
    {
        name: 'three',
        link: 'string',
        img: 'img'
    },
    {
        name: 'four',
        link: 'string',
        img: 'img'
    }
]

export default function Work() {
    return (
        <section className="work" id="work">
            <h2 className="work-title">Some of My Work</h2>
            <div className="work-container">
                {works.map(work => {
                    return (
                        <div className="work-component" key={work.name}>
                            <img className="work-img" src={work.img} alt=""/>
                            <h3 className="work-name">{work.name}</h3>
                            <a href={work.link} className="work-link">Visit Site</a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}