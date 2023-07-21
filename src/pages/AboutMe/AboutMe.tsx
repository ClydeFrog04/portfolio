import React from "react";
import "./AboutMe.css";
import meNKit from "../../../res/MeNKit.jpg";

interface AboutMeProps {

}

const AboutMe = (props: AboutMeProps) => {
    const TAG = "[AboutMe.tsx]";


    return (
        <div className="aboutMe">
            <img src={meNKit} alt=""/>
            <p>Hi there! I'm Randi! Thanks for taking the time to check out my site! It's still a work in progress but I
                hope you enjoy your time here!<br/><br/>
                I'm currently a software developer at Dish Network. In my time at Dish I've had the opportunity to work
                on a few different projects with very different tech stacks! I've gotten a chance to work on projects
                using Android, embedded C, React(with typescript).
                These projects have allowed me to grow my skill-set and improve existing skills and helped me feel more
                confident in the code I write!
            </p>

            <div className="socialLinks">
                <a href="https://www.github.com/clydefrog04" target="_blank">
                    <i className="fa fa-github"/>
                </a>
            </div>
        </div>
    );
};

export default AboutMe;

/*



I've gotten a chance to work on web development, mobile development, and embedded development! Before starting my career, I went to school for game development
and got an associates degree in game development!
 When I'm not writing code, I enjoy playing drums, hockey, spending time outdoors, and playing video games.
 */
