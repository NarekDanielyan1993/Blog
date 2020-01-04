import React from 'react'

import "./Location.css";

export default function Location() {
    return (
        <div className="Location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8623.758643824558!2d44.51858270449192!3d40.16546415644802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc5e5421335f%3A0xbf17e0507776ce4b!2z0KLQsNGI0LjRgA!5e0!3m2!1sru!2s!4v1570286311184!5m2!1sru!2s" 
                    width="100%" 
                    height="550" 
                    frameBorder="0"
                    allowFullScreen="">
            </iframe>
            <div className="Location_tag">Location</div>
        </div>
    )
}
