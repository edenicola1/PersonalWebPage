import React from 'react'
import "../Styles/AboutMe.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function AboutMe() {
    return (
        <div id="aboutMeContainer">
            <p id='aboutMetitle'> About Me </p>
            <section id='sectionContent'>
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} showStatus={false}>
                    <div id="SKV">
                        <p id='paragraphTitle'> Skills and Knowledge  </p>
                        <p id='paragraphContent'> Hello! I'm Enrico De Nicola, and recently graduated from Senpai Academy's Full Stack Web Development Bootcamp.   </p>
                        <p id='paragraphContent'> I'm currently completing my studies in Economics, which provides me with a unique perspective and analytical skills that complement my profile as a developer. My combination of web development and economics knowledge allows me to approach projects with a comprehensive vision, considering both the technical aspects and the economic and business impacts. </p>

                        <p id='paragraphContent'> I strive to creatively solve problems and rely on teamwork for support, always putting my ability to learn quickly into practice. This has allowed me to adapt to new challenges effectively. </p>
                    </div>

                    <div id="HE">
                        <p id='paragraphTitle'> Hobbies and enthusiasm  </p>

                        <p id='paragraphContent'> During my free time, my main activities consist of going to the gym, play or watch football, and just chill with friends, family or my dog.</p>

                        <p id='paragraphContent'> On another note, I would love to mention I'm a crypto enthusiasm, something that started during the beginning of the COVID-19 Pandemic (those long nights sparked the interest!). That's probably where I first started learning about development, and specially in combination with finance, my two favorite work areas! Now, three years later, the enthusiasm stayed intact, and I'm eager to take the next step forward and involve my professional career with this passion. </p>
                    </div>

                    <div id="V">
                        <p id='paragraphTitle'> Vision </p>
                        <p id='paragraphContent'> My goal is to find the ideal working environment to further develop my skills in both sectors, applying the techniques acquired in each area in an integrated and effective manner. </p>
                        <p id='paragraphContent'> Above that, I would love to be able to develop myself in the blockchain and crypto world, but in this case in a professional way. I really think this space will be leading the next majors revolutions in the coming years, and being able to contribute in any manner to it would be indescribable. </p>


                    </div>



                </Carousel>
            </section>

        </div>
    )
}

export default AboutMe


