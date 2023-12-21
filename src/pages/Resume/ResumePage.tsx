import React, {useEffect} from "react";
import "./ResumePage.css";
import headshot from "../../../res/MeNKit.jpg";
// import headshot from "../../../res/headshot.jpg";
import StarSeparator from "../../components/StarSeparator/StarSeparator.tsx";
import {watchScrollHeight} from "../../utils/scrollUtils.ts";
import NavBar from "../../components/NavBar/NavBar.tsx";

interface ResumePageProps {

}

const ResumePage = (props: ResumePageProps) => {
    const TAG = "[ResumePage.tsx]";


    const createWorkExperienceSection = (jobTitle: string, company: string, timeline: string, bullets: string[]) => {

        return (
            <section id={company} className={"workHistorySection"}>
                <div className="title">
                    <h3>{jobTitle}</h3> <span className="timeline">[{timeline}]</span>
                </div>
                <ul className="bullets">
                    {bullets.map((bullet) => {
                        return <li>{bullet}</li>;
                    })}
                </ul>
            </section>
        );
    };

    return (
        <div className="resumePage">
            <NavBar/>
            <StarSeparator starPosition={18}/>
            <header>
                <span className="info">
                    <strong>Creative Software Developer</strong> driven by Innovation.
                </span>
                <img id="headshot" src={headshot} alt="This is a picture of me!"/>
            </header>
            <StarSeparator starPosition={75}/>

            <div className="content">
                <section className="about">
                    <div className="meWrapper">
                        <h2 id="name">
                            Randi Egan
                        </h2>
                        <section id="brief">
                            Dedicated and results-driven Software Developer with over 3 of experience in designing,
                            implementing, testing,
                            and maintaining software solutions. Adept at collaborating with cross-functional teams to drive
                            project success.
                            Seeking a challenging role where I can leverage my skills in Javascript/Typescript, React, CSS,
                            Java/Kotlin, and Android using various
                            software development tools, contribute to innovative projects, and continue to grow in a dynamic
                            development environment.
                        </section>
                    </div>
                    <div className="education">
                        <h2 id="education">Education</h2>
                        {createWorkExperienceSection(
                            "Full Stack Web Development & Computer Science",
                            "Lambda School",
                            "February 2020 - February 2021",
                            [
                                "Studied fundamentals of HTML5, CSS3, responsive design and cross-browser support",
                                "Learned backend development using node.js with express server",
                                "Individually learned and utilized typescript for every project as a bonus instead of javascript"
                            ]
                        )}
                    </div>

                </section>
                <StarSeparator starPosition={20} vertical={true} verticalHeight={1000}/>
                <section className="workHistory">
                    <h2>Work Experience</h2>
                    {createWorkExperienceSection(
                        "Software Engineer",
                        "Dish Network",
                        "April 2021 - Present",
                        [
                            "Led the creation of a new application, revolutionizing set top box installations through a user-friendly web-based solution",
                            "Streamlined processes, increasing development speed, and simplifying operations which reduced install times by 30%",
                            "Eliminated the requirement for expensive UI licenses that were previously in use, resulting in a proposed cost reduction of $250,000 per year",
                            "Researched and integrated React with Android, bridging Java and React using Typescript for seamless communication",
                            "Utilized SCSS preprocessor to implement styles as defined by product design",
                            "Led transition towards standardized protocols; RESTful HTTP API development to replace the legacy APIs",
                            "Managed the team's GitHub repository by reviewing code and approving merge requests",
                            "Built test apps to showcase new architectural paradigms to teams, boosting their confidence to progress",
                            "Collaborated with Product and cross-functional teams, aiding decisions and aligning dev efforts with product goals",
                            "Collaborated directly with product designers to implement designs as defined by product specifications",
                            "Mentored junior developers to foster a collaborative and supportive work environment",
                        ]
                    )}
                    {createWorkExperienceSection(
                        "Field Tech",
                        "Swift River Environmental",
                        "May 2018 - April 2021",
                        [
                            "Developed prototype web-base application for generating environmental monitoring forms on the fly speeding up time needed for techs to do by hand while also improving accuracy of measurements",
                            "Oversaw hardware upgrades, including RAM, hard drives, and other components, to improve system efficiency and speed",
                            "Responsible for environmental monitoring including groundwater, gas, and other various monitoring needs for our clients",

                        ]
                    )}
                </section>
            </div>


        </div>
    );
};

export default ResumePage;
