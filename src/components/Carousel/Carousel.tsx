import React, {HTMLAttributes, useEffect, useReducer, useState} from "react";
import "./Carousel.css";
import {Project} from "../../utils/typeDefs.ts";
import {useNavigate} from "react-router-dom";

type CarouselProps = {//alt+4 let go :p
    carouselLabel: string;
    projects: Project[];
} & HTMLAttributes<HTMLDivElement>;

const Carousel = (props: CarouselProps) => {
    const TAG = "[Carousel.tsx]";
    const navigate = useNavigate();

    const reducer = (state: number, action: { type: "INCREMENT" | "DECREMENT" }) => {
        let newState;
        switch (action.type) {
            case "INCREMENT":
                newState = (state + 1) % props.projects.length;
                return newState;
            case "DECREMENT":
                newState = state - 1;
                return newState < 0 ? props.projects.length - 1 : newState;
            default:
                return state;
        }
    };

    const [activeProject, dispatch] = useReducer(reducer, 0);


    useEffect(() => {
        console.log(activeProject);
    }, [activeProject]);


    return (
        <div className="carousel" aria-label={`carousel-of-${props.carouselLabel}`}>
            <button className="prev" onClick={() => dispatch({type: "DECREMENT"})}>&#8656;</button>
            <button className="next" onClick={() => dispatch({type: "INCREMENT"})}>&#8658;</button>
            <ul>
                {props.projects.map((project, index) => {
                    console.log("project from loop:", project.name, project.href);
                    return <li key={index} className="slide" data-active={activeProject === index} onClick={ (event) => {
                        console.log("project was:", project.name, project.href);
                        navigate(project.href);
                    }}>
                        <img src={project.imgSrc} alt=""/>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default Carousel;
