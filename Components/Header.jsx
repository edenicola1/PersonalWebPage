import React, { useState } from 'react';
import "../Styles/Header.css";
import Menu from "../menu_FILL0_wght400_GRAD0_opsz48.svg"

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);
        // Perform any action based on the selected option
    };

    return (
        <div id="divHeader">
            <div id="headerName">ENRICO DE NICOLA PALACIO</div>
            <div className="dropdown">
                <button id="aboutMeButton" onClick={toggleDropdown}>
                    <img src={Menu}></img>
                </button>
                {showDropdown && (
                    <div className="dropdown-content">
                        <button onClick={() => handleOptionClick("Option 1")}> about me </button>
                        <button onClick={() => handleOptionClick("Option 2")}> technologies </button>
                        <button onClick={() => handleOptionClick("Option 3")}> CV </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
