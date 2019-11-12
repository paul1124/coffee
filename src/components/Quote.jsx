import React from 'react';
import './styles/quote.scss';

export default function Quote() {
    return (
        <section className="quote" id="quote">
            <h2 className="quote-title">Request a Quote</h2>
            <form action="mailto:paulhong1124@gmail.com" className="quote-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <input type="submit" value="Request a Quote" />
            </form>
        </section>
    )
}