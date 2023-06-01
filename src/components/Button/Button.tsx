/**
 * @author Randi Egan
 * this file defines the look and function of a button in our calculator
 */
import React, {PropsWithChildren} from "react";
import "./Button.css";
interface ButtonProps{
    text: string;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
    const TAG = "[Button.tsx]";
    const handleClick = (e: React.MouseEvent) => {
        console.log(TAG, props.text, "clicked!");
    }

    return (
        <button className="button" onClick={handleClick}>
            {props.text}
        </button>
    );

};


export default Button;