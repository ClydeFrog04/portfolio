/**
 * @author Randi Egan
 * this file defines the look and function of a button in our calculator
 */
import React, {PropsWithChildren} from "react";
import "./Button.css";
interface ButtonProps{
    text: string;
    onClick?: (e: React.MouseEvent) => void;
    id?: string;
    class?: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const TAG = "[Button.tsx]";
    const handleClick = (e: React.MouseEvent) => {
        if(props.onClick){
            props.onClick(e);
        }
    }

    return (
        <button className={`button ${props.class !== undefined ? props.class : ""}`.trimEnd()} onClick={handleClick}>
            <div className="shimmerContainer"/>
            {props.text}
        </button>
    );

};


export default Button;
