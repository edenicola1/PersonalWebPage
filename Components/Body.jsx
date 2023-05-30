import React from 'react'
import "../Styles/Body.css"
import Pic from "../Screenshot 2023-05-25 at 16.38.07.png"

function Body() {
    return (
        <div id="bodyContainer">
            <section id="presentationSection">
                <p id="presentationTitle">Full Stack Web Developer & Economics Degree Student</p>
                <div id="presentationParagraph">
                    <p id="presentationBody"> Hey! I'm Enrico, a Full Stack Web Developer and -almost- Economist. My main vision is to be able to participate in passionate projects that require a combination of development skills and economic knowledge!</p>
                </div>
                <img src={Pic} id="myPic"></img>
            </section>
            <section id="myProjects">
                <button id="projectsButton"> Tap and check my recent projects! </button>
            </section>
        </div>
    )
}

export default Body