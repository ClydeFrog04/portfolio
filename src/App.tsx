import "./App.scss";
import {Route, Routes, useNavigate} from "react-router-dom";
import Button from "./components/Button/Button";
// import Calculatorinator from "@portfolio-monorepo/calculator/src/shared/Colors.scss";
import Calculatorinator from "@portfolio-monorepo/calculator/src/pages/Calculatorinator.tsx";

function App() {
    const navigate = useNavigate();

    return (
        <>
            <div className="App">
                <Routes>
                    <Route
                        path={"/"}
                        element={
                            <div className="homeWrapper">
                                <h1>Hello! Welcome to my site! Checkout some of my projects below!</h1>
                                <Button text={"Calculatorinator"} onClick={(e) => {
                                    navigate("/calculatorinator");
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
                </Routes>
            </div>
        </>
    );
}

export default App;
