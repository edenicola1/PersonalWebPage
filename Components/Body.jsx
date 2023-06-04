import React, { useRef, useState, useEffect } from 'react';
import '../Styles/Body.css';
import Pic from '../Screenshot 2023-05-25 at 16.38.07.png';
import { Link } from 'react-router-dom';
import AboutMe from './AboutMe.jsx';
import Technologies from './Technologies';



function Body() {


    return (
        <div id="bodyContainer">
            <section id="presentationSection">
                <p id="presentationTitle">Full Stack Web Developer & Economics Degree Student</p>
                <div id="presentationParagraph">
                    <p id="presentationBody">
                        Hey! I'm Enrico, a Full Stack Web Developer and -almost- Economist. My main vision is to be able to participate
                        in passionate projects that require a combination of development skills and economic knowledge!
                    </p>
                </div>
                <img src={Pic} id="myPic" alt="My Picture" />
            </section>
            <section id="myProjects" >
                <Link to="/myprojects">
                    <button id="projectsButton">Tap and check my recent projects!</button>
                </Link>
            </section>
            <div id="line2"></div>
            <section id="sectionAboutMe">
                <AboutMe />
            </section>
            <section id="sectionTechnologies" >
                <Technologies />
            </section>

        </div>
    );
}

export default Body;
