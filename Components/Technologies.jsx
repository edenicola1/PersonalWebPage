import React from 'react'
import "../Styles/Technologies.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Technologies() {
    return (
        <div id="technologiesContainer">
            <p id="technologiesTitle">TECHNOLOGIES</p>
            <section id="sectionContent1">
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                    <div id="divTech">
                        <img src="../html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png" alt="Image 1" id="fotoHCJ" />
                    </div>
                    <div id="divTech">
                        <img src="../src/assets/react.svg" alt="Image 2" id="fotoR" />
                    </div>
                    <div id="divTech">
                        <img src="../nodejs-1-logo.png" alt="Image 3" id="fotoN" />
                    </div>
                    <div id="divTech">
                        <img src="../azure-sql-banner.webp" alt="Image 3" id="fotoSQL" />
                    </div>
                    <div id="divTech">
                        <img src="../1-What-is-agile-methodology.webp" id="fotoScrum" />
                    </div>
                </Carousel>
            </section>
            <div id="line1"></div>
        </div>
    );
}

export default Technologies;
