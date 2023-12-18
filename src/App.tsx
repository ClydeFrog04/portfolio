import "./App.scss";
import {Route, Routes, useNavigate} from "react-router-dom";
import Button from "./components/Button/Button";
import Calculatorinator from "@portfolio-monorepo/calculator/src/pages/Calculatorinator.tsx";
import DiscoverWeeklySaver from "@portfolio-monorepo/SpotifyWeb/src/Pages/DiscoverWeeklySaver.tsx";
import MazeGameContainer from "./pages/MazeGame/MazeGameContainer.tsx";
import TypeWriter from "./components/TypeWriter/TypeWriter.tsx";
import AboutMe from "./pages/AboutMe/AboutMe.tsx";
import beeIcon from "../res/TransbeeIconMedium.png";
import React, {useContext} from "react";
import HomePage from "./pages/HomePage/HomePage.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import {StateContext} from "./contexts/StateContext.tsx";
import SourdoughCalcPage
    from "@portfolio-monorepo/sourdough-calculator/src/pages/SourdoughCalcPage/SourdoughCalcPage.tsx";
import Board from "@portfolio-monorepo/react-tac-toe/src/Board.tsx";

function App() {
    const navigate = useNavigate();
    const {navBarHeight} = useContext(StateContext);


    return (
        <div className="App" style={{"--nav-bar-height": `${navBarHeight + 1}px`} as React.CSSProperties}>
            {/*<img className={"beeIcon"} src={beeIcon} onClick={ () => {*/}
            {/*    navigate("/");*/}
            {/*}} alt="an icon that is also a bee buzzzzzz"/>*/}
            {/*todo figure out why navbar in app.tsx works now, why it got links to the left here but not when added to the homepage.tsx but gah it works now so good*/}
            {/*<NavBar/>*/}
            {/*<div className="content">*/}
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <>
                            <NavBar/>
                            <HomePage/>
                        </>
                    }
                />
                <Route
                    path={"/oldHome"}
                    element={
                        <>
                            <NavBar/>
                            <div className="homeWrapper">
                                <TypeWriter phrases={[
                                    "Welcome to my site!",
                                    "Please check out one of my projects below!",
                                    "Remember, this site is still a work in progress!",
                                    "You like my typewriter? Checkout how i made it on my github!",
                                    "Thanks for visiting",
                                    "Okay stop typing now",
                                    "No seriously, that's all i have to say",
                                    "*tries to shake it off*",
                                    "Oh god, it won't stop! Send help",
                                    "It's taking over, there's not enough time!",
                                    "please! please just, just have mercy",
                                    "it's",
                                    "it's gonna",
                                    "oh no it's gonna take over",
                                    "we are about to burst oh noooo!!!",
                                    "please, please watch out!",
                                    "cover your eyes oh no it's too late",
                                    "it's",
                                    "happening!!!!",
                                    "AAAAHAHAHHHHHHHHHHHH!!!",
                                    "phew! Now that that's over with!"
                                ]}
                                    // explodeOnPhrase={"Please check out one of my projects below!"}
                                            explodeOnPhrase={"AAAAHAHAHHHHHHHHHHHH!!!"}

                                />
                                {/*<h1>Hello! Welcome to my site! Checkout some of my projects below!</h1>*/}
                                {/*<span>Remember, this site is still a work in progress!</span>*/}
                                {/*<span>Check out some of my project(s) while you're here!</span>*/}
                                <Button text={"Spotify DW Saver"} onClick={(e) => {
                                    navigate("/spotify");
                                }}/>
                                <Button text={"Calculatorinator"} onClick={(e) => {
                                    navigate("/calculatorinator");
                                }}/>
                                <Button text={"Penguin Labyrinth"} onClick={(e) => {
                                    navigate("/mazeGame");
                                }}/>
                                <Button text={"React-Tac-Toe"} onClick={(e) => {
                                    navigate("/reacttactoe");
                                }}/>
                                <Button text={"Sourdough Calculator"} onClick={(e) => {
                                    navigate("/sourdough");
                                }}/>
                                {/*<Button text={"About Me!"} onClick={(e) => {*/}
                                {/*    navigate("/aboutMe");*/}
                                {/*}}/>*/}

                                <p>Want to see how I made the buttons?</p>
                                <Button text={"Learn More!"} onClick={(e) => {
                                    navigate("/dissectButtons");
                                }}/>
                            </div>
                        </>
                    }
                />
                <Route
                    path={"spotify"}
                    element={
                        <>
                            <NavBar/>
                            <div className="spotifyContainer">
                                <DiscoverWeeklySaver/>
                            </div>
                        </>
                    }
                />
                <Route
                    path={"calculatorinator"}
                    element={
                        <div className="calculatorinatorContainer">
                            <Calculatorinator navigate={navigate}/>
                        </div>
                    }
                />
                <Route
                    path={"sourdough"}
                    element={
                        <>
                            <NavBar/>
                            <div className="sourdoughContainer">
                                <SourdoughCalcPage/>
                            </div>
                        </>
                    }
                />
                <Route
                    path={"reacttactoe"}
                    element={
                        <>
                            <NavBar/>
                            <div className="reactTacToeContainer">
                                <Board/>
                            </div>
                        </>
                    }
                />
                <Route
                    path={"mazeGame"}
                    element={
                        <>
                            <img className={"beeIcon"} src={beeIcon} onClick={() => {
                                navigate("/");
                            }} alt="an icon that is also a bee buzzzzzz"/>
                            <MazeGameContainer/>
                        </>
                    }
                />
                <Route
                    path={"aboutMe"}
                    element={
                    <>
                        <NavBar/>
                        <AboutMe/>
                    </>
                    }
                />
                <Route
                    path={"dissectButtons"}
                    element={
                        <>
                            <NavBar/>
                            <div className="dissectPage"
                                 style={{"--nav-bar-height": `${navBarHeight + 1}px`} as React.CSSProperties}>
                                <Button class={"dissect"} text={"Hover Me!"}/>
                            </div>
                        </>
                    }
                />
                {/*todo: long distance date time calculator, you put in your time zone and your partners difference and pick min and max times for when you both can meet and it gives times of day that work for both*/}
            </Routes>
        </div>
        // </div>
    );
}

export default App;
