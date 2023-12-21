import React from "react";
import "./StarSeparator.css";

interface StarSeparatorProps {
    starPosition: number;//the left percent for where the star should be place on it's line
    vertical?: boolean;
}

const StarSeparator = (props: StarSeparatorProps) =>{
    const TAG = "[StarSeparator.tsx]";

    const horizontal = (
        <div className="starSeparator" style={{"--leftPosition": `${props.starPosition}%`} as React.CSSProperties}/>
    );
    const vertical = (
        <div className="starSeparator vertical" style={{"--verticalPosition": `${props.starPosition}%`} as React.CSSProperties}/>
    );
    return props.vertical === true ? vertical : horizontal;
}

export default StarSeparator;
