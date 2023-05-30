import React, { useState } from 'react';
import "../Styles/Header.css";
import Menu from "../menu_FILL0_wght400_GRAD0_opsz48.svg";
import pdfFile from "../CV-EnricoDeNicolaPalacio-English.pdf";
import { Link } from "react-router-dom";

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);

        if (option === "Option 3") {
            // Trigger PDF file download
            const link = document.createElement('a');
            link.href = pdfFile;
            link.target = "_blank";
            link.download = "CV-EnricoDeNicolaPalacio.pdf";
            link.click();
        }

        // Perform any other actions based on the selected option
    };

    return (
        <div id="divHeader">
            <div id="headerName">ENRICO DE NICOLA PALACIO</div>
            <div className="dropdown">
                <button id="aboutMeButton" onClick={toggleDropdown}>
                    <img src={Menu} alt="Menu" />
                </button>
                {showDropdown && (
                    <div className="dropdown-content">
                        <Link to="/aboutme">
                            <button onClick={() => handleOptionClick("Option 1")}>about me</button>
                        </Link>
                        <button onClick={() => handleOptionClick("Option 2")}>technologies</button>
                        <button onClick={() => handleOptionClick("Option 3")}>CV</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
