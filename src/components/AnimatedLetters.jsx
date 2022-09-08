import React from 'react';

const AnimatedLetters = ({letters, letterClass, idx}) => (
    <span>
        {
            letters.map((letter, index) => (
                <span key={index} className={`${letterClass} _${index + idx}`}>{letter}</span>
            ))
        }
    </span>
);

export default AnimatedLetters;