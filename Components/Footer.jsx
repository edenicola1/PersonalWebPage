import React from 'react'
import "../Styles/Footer.css"
import linkedinLogo from "../linkedin-big-logo.svg"
import githubLogo from "../github logo.svg"

function Footer() {
    return (
        <div id="footerContainer">
            <section id="footer">
                <div id="socialsLinks">
                    <a href="https://www.linkedin.com/in/enricodenicolapalacio" target="_blank" rel="noopener noreferrer">
                        <img id="linkedinLogo" src={linkedinLogo} alt="LinkedIn Logo" />
                    </a>
                    <a href="https://github.com/edenicola1" target="_blank" rel="noopener noreferrer">
                        <img id="githubLogo" src={githubLogo}></img>
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
    )
}

export default Footer