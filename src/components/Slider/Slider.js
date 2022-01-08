import React from 'react';
import './Slider.css'

function Slider(props) {
    return (
        <div className={`slider ${props.overflow ? 'slide' : ''}`}>
            <a href='../../data/cover_letter.pdf' rel="noopener noreferrer" download>Download my CV</a>
        </div>
    );
}

export default Slider;