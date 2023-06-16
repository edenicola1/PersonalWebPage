import React, { useState } from 'react';
import '../../Styles/Header.css';
import Menu from '../../../menu_FILL0_wght400_GRAD0_opsz48.svg';
import pdfFile from '../../../CV-EnricoDeNicolaPalacio-English.pdf';
import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);

        if (option === 'Option 3') {
            // Trigger PDF file download
            const link = document.createElement('a');
            link.href = pdfFile;
            link.target = '_blank';
            link.download = 'CV-EnricoDeNicolaPalacio.pdf';
            link.click();
        }
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
                        <ScrollLink to="sectionAboutMe" smooth={true} duration={500} onClick={() => handleOptionClick('Option 1')}>
                            <button> about me </button>
                        </ScrollLink>
                        <ScrollLink to="sectionTechnologies" smooth={true} duration={500} onClick={() => handleOptionClick('Option 2')}>
                            <button onClick={() => handleOptionClick('Option 2')}>technologies</button>
                        </ScrollLink>
                        <button onClick={() => handleOptionClick('Option 3')}>CV</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
