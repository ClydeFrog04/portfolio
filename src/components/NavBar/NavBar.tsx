import React, {useContext, useEffect, useRef, useState} from "react";
import "./NavBar.scss";
import beeIcon from "../../../res/TransbeeIconMedium.png";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {StateContext} from "../../contexts/StateContext.tsx";
import {useWindowResize} from "../../hooks/useWindowResize.ts";
// import Button from "@portfolio-monorepo/calculator/src/components/Button/Button.tsx";
import Button from "../../components/Button/Button";


interface NavBarProps {

}

const NavBar = (props: NavBarProps) =>{
    const TAG = "[NavBar.tsx]";
    const verboseLogging = import.meta.env.VITE_VERBOSE_LOGGING === "true";
    const navigate = useNavigate();
    const {navBarHeight, setNavBarHeight} = useContext(StateContext);
    const breakpointMobile = 480;// from variables.scss
    const dimension = useWindowResize();
    const [devType, setDevType] = useState<"desktop" | "mobile">("desktop");
    const [menuOpen, setMenuOpen] = useState(false);



    const navBarRef = useRef<HTMLElement|null>(null);

    useEffect(() => {
        if(navBarRef.current != null){
            if(verboseLogging){
                console.log(TAG, "NAV BAR IS:", navBarRef.current?.clientHeight);
            }
            setNavBarHeight(navBarRef.current?.clientHeight);
        }
    }, [navBarRef.current]);

    useEffect(() => {
        let logText = "";
        if(dimension.width <= breakpointMobile){
            logText = "window changed to mobile";
            setDevType("mobile");
        } else{
            logText = "window changed to desktop";
            setDevType("desktop");
        }

        if(verboseLogging){
            console.log(TAG, JSON.stringify(dimension));
            console.log(TAG, logText);
        }
    }, [dimension]);

    const sections =(
        <>
            <section className="navLinks">
                <NavLink to={"/#about"}>About Me</NavLink>
                <NavLink to={"/#projects"}>Projects</NavLink>
                <NavLink to={"/resume"}>Resume</NavLink>
                <NavLink to={"/"}>Contact</NavLink>
            </section>
            <section className="socials">
                <NavLink className="socialIcon" to={"https://www.github.com/clydefrog04"} target={"_blank"}>
                    <i className="fa fa-github"/>
                </NavLink>
                <NavLink className="socialIcon" to={"https://www.linkedin.com/in/randi-egan/"} target={"_blank"}>
                    <i className="fa fa-linkedin"/>
                </NavLink>
                <NavLink id="allProjects" to={"/oldHome"}>All Projects List</NavLink>
                {/*<a href="https://www.github.com/clydefrog04" target="_blank">*/}
                {/*    <i className="fa fa-github"/>*/}
                {/*</a>*/}
            </section>
        </>
    )

    const desktop =(
        <nav className="navBar" ref={navBarRef}>
            {/*<img className={"beeIcon"} src={beeIcon} onClick={ () => {*/}
            {/*    navigate("/");*/}
            {/*}} alt="an icon that is also a bee buzzzzzz"/>*/}
            <NavLink to={"/"} className={"name"}>Randi Egan</NavLink>
            {sections}
        </nav>
    )

    const mobile = (
        <div className={`navBar menuContainer`}>
            <img src={beeIcon} alt="" onClick={() => {
                setMenuOpen(!menuOpen);
            }}/>
            <div className={`menu ${menuOpen ? "" : "hide"}`.trimEnd()} onClick={() => {
                setMenuOpen(false);
            }}>

                <div className="separator"/>
                <div className="navSections">
                    {sections}
                    <div className="separator"/>
                    <span>Bored?</span>
                    <Button class={"boredBtn"} text={"Take me home!"} onClick={() => {
                        navigate("/");
                    }}/>
                </div>
            </div>
        </div>
    )


    return devType === "desktop" ? desktop : mobile;
}

export default NavBar;
