import React, {useState} from 'react';
import AnimatedLetters from "./AnimatedLetters.jsx";

const Header = () => {
    const [nameLetters, setNameLetters] = useState(['I', 'r', 'a', '', 'N', 'a', 'k', 'o', 'n', 'e', 'c', 'h', 'n', 'a']);
    const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <div className="header-section">
            {/*<h1>Your partner in creating and growing brands.</h1>*/}
            <AnimatedLetters letters={nameLetters} letterClass={letterClass} idx={1}/>
            <p>Front End Developer</p>
            <button type="button">Get in Touch</button>
        </div>
    );
}

export default Header;