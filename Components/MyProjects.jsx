import React, { useEffect, useRef } from 'react';
import '../Styles/MyProjects.css';
import ServiciosImage from '../Screenshot 2023-05-30 at 20.21.12.png';
import PokedexImage from '../Screenshot 2023-05-30 at 20.39.34.png';
import AudnImage from '../Screenshot 2023-05-30 at 20.41.58.png';
import ServiciosVideo from '../Screen Recording 2023-05-30 at 20.24.22.mp4';
import PokedexVideo from '../Screen Recording 2023-05-30 at 20.40.10.mp4';
import AudnVideo from '../Screen Recording 2023-05-30 at 20.43.12.mp4';

function MyProjects() {
    const videoRefs = useRef([]);

    const handleMouseEnter = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="myProjectsContainer">
            <p id="projectsTitle">My Projects</p>
            <p id="projectsParagraph">
                During the Bootcamp, I was able to create three different main projects, where I put into practice the technologies acquired, and also developed the social skills needed to thrive in this context, such as teamwork, critical thinking, and problem resolution.
            </p>

            <section id="projectsSection">
                <div
                    id="Project"
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                >
                    <video src={ServiciosVideo} poster={ServiciosImage} id="Fotos" ref={(ref) => (videoRefs.current[0] = ref)} />
                    <p id="projectDescription">Services-offering platform developed only with HTML and CSS</p>
                </div>

                <div
                    id="Project"
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <video src={PokedexVideo} poster={PokedexImage} id="Fotos" ref={(ref) => (videoRefs.current[1] = ref)} />
                    <p id="projectDescription">PokeDex created using HTML, CSS, JavaScript, and React.Js</p>
                </div>

                <div
                    id="Project"
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >
                    <video src={AudnVideo} poster={AudnImage} id="Fotos" ref={(ref) => (videoRefs.current[2] = ref)} />
                    <p id="projectDescription">AUDN, a listening platform similar to Spotify, developed by combining the Frontend tools with Node.Js and MySQL</p>
                </div>
            </section>

            <div id="line3"></div>

            <section id="footerMyProjects">
                <p id="footerText"> Interested in exploring the code in-depth?   <a href="https://github.com/edenicola1" target="_blank" rel="noopener noreferrer" id="footerText">Here's</a> my Github! </p>
            </section>
        </div>
    );
}

export default MyProjects;
