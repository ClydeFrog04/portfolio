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
    const navigate = useNavigate();
    const {navBarHeight, setNavBarHeight} = useContext(StateContext);
    const breakpointMobile = 480;// from variables.scss
    const dimension = useWindowResize();
    const [devType, setDevType] = useState<"desktop" | "mobile">("desktop");
    const [menuOpen, setMenuOpen] = useState(false);



    const navBarRef = useRef<HTMLElement|null>(null);

    useEffect(() => {
        if(navBarRef.current != null){
            console.log("NAV BAR IS:", navBarRef.current?.clientHeight);
            setNavBarHeight(navBarRef.current?.clientHeight);
        }
    }, [navBarRef.current]);

    useEffect(() => {
        console.log(JSON.stringify(dimension));
        if(dimension.width <= breakpointMobile){
            console.log("window changed to mobile");
            setDevType("mobile");
        } else{
            console.log("window changed to desktop");
            setDevType("desktop");
        }
    }, [dimension]);

    const sections =(
        <>
            <section className="navLinks">
                <NavLink to={"/aboutMe"}>About Me</NavLink>
                {/*<Link to={"/#projects"}>Projects</Link>*/}
                <a href={"/#projects"}>Projects</a>
                <NavLink to={"/"}>Resume</NavLink>
                <NavLink to={"/"}>Contact</NavLink>
            </section>
            <section className="socials">
                <NavLink to={"https://www.github.com/clydefrog04"} target={"_blank"}>
                    <i className="fa fa-github"/>
                </NavLink>
                <NavLink to={"/"}>
                    <i className="fa fa-linkedin"/>
                </NavLink>
                <NavLink to={"/oldHome"}>All Projects List</NavLink>
                {/*<a href="https://www.github.com/clydefrog04" target="_blank">*/}
                {/*    <i className="fa fa-github"/>*/}
                {/*</a>*/}
            </section>
        </>
    )

    const desktop =(
        <header className="navBar" ref={navBarRef}>
            {/*<img className={"beeIcon"} src={beeIcon} onClick={ () => {*/}
            {/*    navigate("/");*/}
            {/*}} alt="an icon that is also a bee buzzzzzz"/>*/}
            <NavLink to={"/"} className={"name"}>Randi Egan</NavLink>
            {sections}
        </header>
    )

    const mobile = (
        <div className={`navBar menuContainer`}>
            <img src={beeIcon} alt="" onClick={() => {
                console.log("bee clicked");
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
