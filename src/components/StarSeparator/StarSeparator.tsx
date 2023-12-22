import React from "react";
import "./StarSeparator.css";

type StarSeparatorProps = {
    starPosition: number;//the left percent for where the star should be place on it's line
    vertical?: boolean;
    verticalHeight?: number;
};

const StarSeparator = (props: StarSeparatorProps) =>{
    const TAG = "[StarSeparator.tsx]";

    const horizontal = (
        // <div className="starSeparator" style={{"--leftPosition": `${props.starPosition}%`} as React.CSSProperties}/>
        <div className="starSeparator" style={{"--leftPosition": `${props.starPosition}%`} as React.CSSProperties}>
            <div id="lineWithStar"></div>
        </div>
    );
    const vertical = (
        <div className="starSeparator vertical" style={{"--verticalPosition": `${props.starPosition}%`, "--verticalHeight": `${props.verticalHeight}px`} as React.CSSProperties}>
            <div id="lineWithStar"></div>
        </div>
    );
    return props.vertical === true ? vertical : horizontal;
}

export default StarSeparator;
