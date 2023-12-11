import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar.tsx";

interface HomePageProps {

}

const HomePage = (props: HomePageProps) =>{
    const TAG = "[HomePage.tsx]";


    return (
        <div className="homePage">
            <NavBar/>
        </div>
    );
}

export default HomePage;
