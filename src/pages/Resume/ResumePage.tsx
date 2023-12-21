import React from "react";
import "./ResumePage.css";
import headshot from "../../../res/MeNKit.jpg";
// import headshot from "../../../res/headshot.jpg";
import StarSeparator from "../../components/StarSeparator/StarSeparator.tsx";

interface ResumePageProps {

}

const ResumePage = (props: ResumePageProps) =>{
    const TAG = "[ResumePage.tsx]";


    return (
        <div className="resumePage">
            <StarSeparator starPosition={25}/>
            <header>
                <span className="info">
                    <strong>Creative Software Developer</strong> driven by Innovation.
                </span>
                <img id="headshot" src={headshot} alt="This is a picture of me!"/>
            </header>

            <StarSeparator starPosition={33}/>
        </div>
    );
}

export default ResumePage;
