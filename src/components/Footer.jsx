import React from 'react';
import './styles/footer.scss';

export default function Footer() {
    return (
        <section className="footer" id="footer">
            <div className="footer-link-container">
                <a href="" className="footer-link">LinkedIn</a>
            </div>
            <div className="footer-group">
                <p className="footer-group-text">
                    Join my Exclusive Facebook Group for Coffee Shop Owners - Click <a href="">Here</a> to apply
                </p>
            </div>
            <div className="footer-nav">
                <ul className="footer-nav-link-container">
                <li className="footer-nav-link">Growth Tips</li>
                <li className="footer-nav-link">About Me</li>
                <li className="footer-nav-link">Contact</li>
                </ul>
            </div>
            
            <p className="footer-copyright">© Website.com</p>
        </section>
    )
}