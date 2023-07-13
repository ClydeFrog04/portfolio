import "./App.css";
import {Route, Routes, useNavigate} from "react-router-dom";
import Button from "./components/Button/Button";
import Calculatorinator from "@portfolio-monorepo/calculator/src/pages/Calculatorinator.tsx";
import MazeGameContainer from "./pages/MazeGame/MazeGameContainer.tsx";
import TypeWriter from "./components/TypeWriter/TypeWriter.tsx";

function App() {
    const navigate = useNavigate();

    return (
        <div className="App">
            <Routes>
                <Route
                    path={"/"}
                    element={
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
                            <Button text={"Calculatorinator"} onClick={(e) => {
                                navigate("/calculatorinator");
                            }}/>
                            <Button text={"Penguin Labyrinth"} onClick={(e) => {
                                navigate("/mazeGame");
                            }}/>
                        </div>
                    }
                />
                <Route
                    path={"calculatorinator"}
                    element={
                        <div className="calculatorinatorContainer">
                            <Calculatorinator/>
                        </div>
                    }
                />
                <Route
                    path={"mazeGame"}
                    element={
                        <MazeGameContainer/>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
