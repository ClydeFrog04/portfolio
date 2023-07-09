import React, {useEffect} from "react";
import "./MazeGameContainer.css";
import {Unity, useUnityContext} from "react-unity-webgl";
import beeIcon from "../../../res/TransbeeIconMedium.png";
import {useNavigate} from "react-router-dom";

interface MazeGameContainerProps {

}

const MazeGameContainer = (props: MazeGameContainerProps) => {
    const TAG = "[MazeGameContainer.tsx]";
    const {unityProvider, isLoaded, loadingProgression} = useUnityContext({
        loaderUrl: "/MazeGameBuild/MazeGame.loader.js",
        dataUrl: "/MazeGameBuild/MazeGame.data",
        frameworkUrl: "/MazeGameBuild/MazeGame.framework.js",
        codeUrl: "/MazeGameBuild/MazeGame.wasm"
    });
    const loadingPercentage = Math.round(loadingProgression * 100);
    const navigate = useNavigate();

    const messageHandler = (e: MessageEvent) => {
        console.log(TAG, "message received:", e);

    };

    useEffect(() => {

        window.addEventListener("message", messageHandler);
        return function cleanUp() {
            window.removeEventListener("message", messageHandler);
        };
    }, []);


    return (
        <div className="mazeGameContainer">
            <img className={"beeIcon"} src={beeIcon} onClick={ () => {
                navigate("/");
            }} alt="an icon that is also a bee buzzzzzz"/>
            {isLoaded === false && (
                <div className="loading-overlay">
                    <p>Loading... ({loadingPercentage}%)</p>
                </div>
            )}
            <Unity style={{width: "100vw", height: "100vh", display: (!isLoaded ? "none" : "inherit")}}
                   unityProvider={unityProvider}/>
        </div>
    );
};

export default MazeGameContainer;
