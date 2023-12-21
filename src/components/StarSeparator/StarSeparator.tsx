import React from "react";
import "./StarSeparator.css";

interface StarSeparatorProps {
    starPosition: number;//the left percent for where the star should be place on it's line
}

const StarSeparator = (props: StarSeparatorProps) =>{
    const TAG = "[StarSeparator.tsx]";


    return (
        <div className="starSeparator" style={{"--leftPosition": `${props.starPosition}%`} as React.CSSProperties}/>
//    <div className="star" style={{"--leftPosition": "25%"}}/>
);
}

export default StarSeparator;
