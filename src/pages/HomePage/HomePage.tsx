import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar.tsx";
import meNKit from "../../../res/MeNKit.jpg";
// import bee from "../../../res/TransbeeIconMedium.png";
// import beeStock from "../../../res/beeStockPhoto.jpg";
// import bumbleBee from "../../../res/bumbleBee.png";
import spotifyApp from "../../../res/spotifyApp.png";
import calculator from "../../../res/calculator.png";
import mazegame from "../../../res/mazegame.png";
import bumbleBee from "../../../res/bumbleBee.png";
import {NavLink} from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel.tsx";

interface HomePageProps {

}

const HomePage = (props: HomePageProps) =>{
    const TAG = "[HomePage.tsx]";


    return (
        <div className="homePage">
            {/*<NavBar/>*/}
            <section className="quickAbout">
                <img src={meNKit} alt="This is a picture of me, Randi, and my cat, Kit!"/>
                <div className="infoContainer">
                    <h2>Hello there! I'm Randi!</h2>
                    {/*<p className="info">*/}
                    {/*    I'm a software developer in Colorado! In my career so far, I've had the opportunity to work*/}
                    {/*    on many different projects with very different tech stacks! To name a few, I've worked on projects*/}
                    {/*    using Android, embedded C, React(with typescript).<br/><br/>*/}
                    {/*    These projects have allowed me to grow my skill-set and improve existing skills and helped me feel more*/}
                    {/*    confident in the code I write!<br/><br/>*/}
                    {/*    I'm always looking to learn something new, and constantly growing my skill-set!*/}
                    {/*</p>*/}
                    <p className="info">
                        I'm a software developer based in Colorado with a diverse background in working on various projects using different technologies
                        such as Android, embedded C, and React with TypeScript. <br/><br/>
                        I have a passion for learning and am always on the lookout for new challenges to further expand my skill set!
                        The journey of constant growth and improvement is what excites me the most in my career!
                    </p>
                </div>
            </section>
            <section className="longAbout">
                {/*<section className="infoContainer">*/}
                    <h3>About</h3>
                    <p className="info">
                        Throughout my career, I've been enthusiastic about driving change through and building cool things.
                        One of my biggest achievements was rebuilding a major part of an outdated UI using modern technologies like react,
                        typescript and android systems! Projects like these are always a fun challenge that showcase my ability to create and learn new things.
                        <br/><br/>
                        I got my start as a developer by writing TI basic code on my graphing calculators when I was in school.
                        I fell in love with the trial and error process of code, especially in relation to learning a language that is new to me.
                        After teaching myself how to build small basic applications on my calculators, I went on to learn other aspects of programming,
                        including game design. <NavLink to={"/mazeGame"}>You can play one of my first game projects here!</NavLink> This one was a fun challenge in designing my own algorithms,
                        this one being a procedural maze generation algorithm!
                        <br/><br/>
                        Beyond coding, I love spending time on other various hobbies including baking, rock climbing, and listening to and playing music!
                    </p>
                {/*</section>*/}
            </section>
            <section className="projects" id="projects">
                <h3>Projects</h3>
                <p className="info">Wanna check out some of my projects?</p>
                <Carousel carouselLabel={"projects"} projects={[
                    {name: "Spotify DW Saver", href: "/spotify", imgSrc: spotifyApp},
                    {name: "Calculatorinator", href: "/calculatorinator", imgSrc: calculator},
                    {name: "Penguin Labyrinth", href: "/mazeGame", imgSrc: mazegame},
                    // {name: "Buttons", href: "/dissectButtons", imgSrc: bumbleBee},
                ]}/>
            </section>
        </div>
    );
}

export default HomePage;