import React from "react";
import "./NavBar.scss";
import beeIcon from "../../../res/TransbeeIconMedium.png";
import {NavLink, useNavigate} from "react-router-dom";

interface NavBarProps {

}

const NavBar = (props: NavBarProps) =>{
    const TAG = "[NavBar.tsx]";
    const navigate = useNavigate();


    return (
        <header className="navBar">
            {/*<img className={"beeIcon"} src={beeIcon} onClick={ () => {*/}
            {/*    navigate("/");*/}
            {/*}} alt="an icon that is also a bee buzzzzzz"/>*/}
            <NavLink to={"/"} className={"name"}>Randi Egan</NavLink>
            <section className="navLinks">
                <NavLink to={"aboutMe"}>About Me</NavLink>
                <NavLink to={"/"}>Projects</NavLink>
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
                {/*<a href="https://www.github.com/clydefrog04" target="_blank">*/}
                {/*    <i className="fa fa-github"/>*/}
                {/*</a>*/}
            </section>
        </header>
    );
}

export default NavBar;
