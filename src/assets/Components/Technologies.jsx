import React, { useRef, useEffect, useState } from 'react';
import "../../Styles/Technologies.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import HTML from "../../../html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png";
import ReactPic from "../react.svg";
import Node from "../../../nodejs-1-logo.png";
import SQL from "../../../azure-sql-banner.webp";
import Scrum from "../../../1-What-is-agile-methodology.webp"



function Technologies() {
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
        <div id="technologiesContainer" ref={sectionRef}>
            <p id="technologiesTitle" className={isVisible ? 'visible' : 'hidden'}>TECHNOLOGIES</p>
            <section id="sectionContent1" className={isVisible ? 'visible' : 'hidden'}>
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                    <div id="divTech">
                        <img src={HTML} alt="Image 1" id="fotoHCJ" />
                    </div>
                    <div id="divTech">
                        <img src={ReactPic} alt="Image 2" id="fotoR" />
                    </div>
                    <div id="divTech">
                        <img src={Node} alt="Image 3" id="fotoN" />
                    </div>
                    <div id="divTech">
                        <img src={SQL} alt="Image 3" id="fotoSQL" />
                    </div>
                    <div id="divTech">
                        <img src={Scrum} id="fotoScrum" />
                    </div>
                </Carousel>
            </section>
            <div id="line1"></div>
        </div>
    );
}

export default Technologies;
