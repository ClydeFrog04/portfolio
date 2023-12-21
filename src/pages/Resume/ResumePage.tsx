import React from "react";
import "./ResumePage.css";
import StarSeparator from "../../components/StarSeparator/StarSeparator.tsx";

interface ResumePageProps {

}

const ResumePage = (props: ResumePageProps) =>{
    const TAG = "[ResumePage.tsx]";


    return (
        <div className="resumePage">
            <StarSeparator starPosition={25}/>
            <StarSeparator starPosition={33}/>
        </div>
    );
}

export default ResumePage;
