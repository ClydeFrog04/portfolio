import React, {forwardRef, HTMLAttributes, useEffect, useReducer, useRef, useState} from "react";
import "./Carousel.css";
import {Project} from "../../utils/typeDefs.ts";
import {useNavigate} from "react-router-dom";

type CarouselProps = {//alt+4 let go :p
    carouselLabel: string;
    projects: Project[];
    classes?: string[];
    // ref?: React.Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

// const Carousel = forwardRef(function Carousel(props: CarouselProps, ref) => {
const Carousel = forwardRef(function Carousel(props: CarouselProps, ref: React.Ref<HTMLDivElement>) {
    const TAG = "[Carousel.tsx]";
    const navigate = useNavigate();
    const autoCycleTimer = useRef<NodeJS.Timer | null>(null);
    const autoCycleInterval = 5000;//time for each cycle in ms


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
        startAutoCycle();
        return () => {
            stopAutoCycle();
        };
    }, []);

    const clearAndPauseAutoCycle = () => {
        stopAutoCycle();

        setTimeout(() => {
            startAutoCycle();
        }, 10_000);
    };

    const stopAutoCycle = () => {
        clearInterval(autoCycleTimer.current as NodeJS.Timer);
        autoCycleTimer.current = null;
    };

    const startAutoCycle = () => {
        if (autoCycleTimer.current !== null) {
            return;
        }
        autoCycleTimer.current = setInterval(() => {
            dispatch({type: "INCREMENT"});
        }, autoCycleInterval);
    };


    return (
        <div ref={ref} className={`carousel ${props.classes?.join(" ")}`.trimEnd()}
             aria-label={`carousel-of-${props.carouselLabel}`}>
            <button className="prev" onClick={() => {
                clearAndPauseAutoCycle();
                dispatch({type: "DECREMENT"});
            }}>&#8656;</button>
            <button className="next" onClick={() => {
                clearAndPauseAutoCycle();
                dispatch({type: "INCREMENT"});
            }}>&#8658;</button>
            <ul>
                {props.projects.map((project, index) => {
                    return <li key={index} className="slide" data-active={activeProject === index} onClick={(event) => {
                        navigate(project.href);
                    }}>
                        <img src={project.imgSrc} alt=""/>
                    </li>;
                })}
            </ul>
        </div>
    );
});

export default Carousel;
