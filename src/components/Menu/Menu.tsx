import React, {useContext, useState} from "react";
import Button from "../Button/Button.tsx";
import beeIcon from "../../../res/TransbeeIconMedium.png";
import {StateContext} from "../../contexts/StateContext.tsx";
import {useNavigate} from "react-router-dom";

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {} = useContext(StateContext);
    const navigate = useNavigate();




    const handleDropDownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // console.log(TAG, "New color picked was:", e.target.value);
        // setThemeOption(colorOptions.indexOf(e.target.value));
        //
        // if(e.target.value !== "Custom"){
        //     setMenuOpen(false);
        //     setShowCustomColorInput(false);
        // }else{
        //     setShowCustomColorInput(true);
        // }
    };


    return (
        <div className={`menuContainer`}>
            <img src={beeIcon} alt="" onClick={() => {
                setMenuOpen(!menuOpen);
            }}/>
            <div className={`menu ${menuOpen ? "" : "hide"}`.trimEnd()} onClick={() => {
                setMenuOpen(false);
            }}>
                {/*<span>Don't like the current color? Try one of these!</span>*/}
                {/*<select className="colorOptions"*/}
                {/*        onChange={handleDropDownChange}*/}
                {/*        onClick={event => event.stopPropagation()}>*/}
                {/*    {colorOptions.map((color) => {*/}
                {/*        return <option key={color}>{color}</option>;*/}
                {/*    })}*/}
                {/*</select>*/}
                {/*{showCustomColorInput && <input*/}
                {/*    className={"customColorInput"}*/}
                {/*    onClick={event => event.stopPropagation()}*/}
                {/*    onChange={(e) => {*/}
                {/*        const colorCode = e.target.value;*/}
                {/*        const matches = validateHexCode(colorCode);*/}
                {/*        console.log(TAG, colorCode, "matches:", matches);*/}
                {/*        if (matches) {*/}
                {/*            const preferredFontColor = calculateContrastColor(colorCode);*/}
                {/*            if (!colorCode.startsWith("#")) {*/}
                {/*                setCustomColor("#" + colorCode);*/}
                {/*            } else {*/}
                {/*                setCustomColor(colorCode);*/}
                {/*            }*/}
                {/*            setFontColor(preferredFontColor);*/}
                {/*        }*/}
                {/*    }}*/}
                {/*/>}*/}

                <div className="separator"/>
                <div className="bored">
                    <span>Bored?</span>
                    <Button class={"boredBtn"} text={"Take me home!"} onClick={() => {
                        try {
                            //this app can be wrapped in another app that has a router, but in case one isn't found, we dont want to crash!
                            navigate("/");
                        } catch (e) {
                        }
                    }}/>
                </div>
            </div>
        </div>
    );
};

export default Menu;

/*
<div className={`menuContainer`}>
                <img src={beeIcon} alt="" onClick={() => {
                    setMenuOpen(!menuOpen);
                }}/>
                <div className={`menu ${menuOpen ? "" : "hide"}`.trimEnd()} onClick={() => {
                    setMenuOpen(false);
                }}>
                    <span>Don't like the current color? Try one of these!</span>
                    <select className="colorOptions"
                            onChange={handleDropDownChange}
                            onClick={event => event.stopPropagation()}>
                        {colorOptions.map((color) => {
                            return <option key={color}>{color}</option>;
                        })}
                    </select>
                    {showCustomColorInput && <input
                        className={"customColorInput"}
                        onClick={event => event.stopPropagation()}
                        onChange={ (e) => {
                            const colorCode = e.target.value;
                            const matches = validateHexCode(colorCode);
                            console.log(TAG, colorCode, "matches:", matches);
                            if(matches){
                                const preferredFontColor = calculateContrastColor(colorCode);
                                if(!colorCode.startsWith("#")){
                                    setCustomColor("#" + colorCode);
                                }else{
                                    setCustomColor(colorCode);
                                }
                                setFontColor(preferredFontColor);
                            }

                        }}
                    />}

                    <div className="separator"/>
                    <div className="bored">
                        <span>Bored?</span>
                        <Button class={"boredBtn"} text={"Take me home!"} onClick={() => {
                            try {
                                //this app can be wrapped in another app that has a router, but in case one isn't found, we dont want to crash!
                                navigate("/");
                            } catch (e) {
                            }
                        }}/>
                    </div>
                </div>
            </div>
 */
