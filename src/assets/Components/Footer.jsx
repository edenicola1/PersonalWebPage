import React, { useRef, useEffect, useState } from 'react';
import "../../Styles/Footer.css";
import linkedinLogo from "../../../linkedin-big-logo.svg";
import githubLogo from "../../../github logo.svg";

function Footer() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElement = sectionRef.current;
            const { top, height } = sectionElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the section is at least 33% visible in the viewport
            if (top + height / 3 < windowHeight) {
                setIsVisible(true);
                // Remove the scroll event listener once the section is visible
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="footerContainer" ref={sectionRef}>
            <section id="footer" className={isVisible ? 'visible' : 'hidden'}>
                <div id="socialsLinks">
                    <a href="https://www.linkedin.com/in/enricodenicolapalacio" target="_blank" rel="noopener noreferrer">
                        <img id="linkedinLogo" src={linkedinLogo} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/edenicola1" target="_blank" rel="noopener noreferrer">
                        <img id="githubLogo" src={githubLogo} alt="GitHub Logo" />
                    </a>
                </div>
                <div id="inquiries">
                    <p id="message"> Do not hesitate to inquire! </p>
                    <a href="mailto:edenicolapalacio@gmail.com" id="contactButton2">
                        <button id="contactButton"> CONTACT ME </button>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Footer;
