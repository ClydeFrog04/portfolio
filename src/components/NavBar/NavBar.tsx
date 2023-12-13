import React, {useContext, useEffect, useRef} from "react";
import "./NavBar.scss";
import beeIcon from "../../../res/TransbeeIconMedium.png";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {StateContext} from "../../contexts/StateContext.tsx";

interface NavBarProps {

}

const NavBar = (props: NavBarProps) =>{
    const TAG = "[NavBar.tsx]";
    const navigate = useNavigate();
    const {navBarHeight, setNavBarHeight} = useContext(StateContext);


    const navBarRef = useRef<HTMLElement|null>(null);

    useEffect(() => {
        if(navBarRef.current != null){
            console.log("NAV BAR IS:", navBarRef.current?.clientHeight);
            setNavBarHeight(navBarRef.current?.clientHeight);
        }
    }, [navBarRef.current]);


    return (
        <header className="navBar" ref={navBarRef}>
            {/*<img className={"beeIcon"} src={beeIcon} onClick={ () => {*/}
            {/*    navigate("/");*/}
            {/*}} alt="an icon that is also a bee buzzzzzz"/>*/}
            <NavLink to={"/"} className={"name"}>Randi Egan</NavLink>
            <section className="navLinks">
                <NavLink to={"aboutMe"}>About Me</NavLink>
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
        </header>
    );
}

export default NavBar;
