/**
 * @author Randi Egan
 * @date   5/25/2023
 */


import React, {createContext, Dispatch, JSX, PropsWithChildren, SetStateAction, useState} from "react";

//define our default state
const defaultState = {
    name: "",
    navBarHeight: 0
};

interface IState {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    navBarHeight: number;
    setNavBarHeight: Dispatch<SetStateAction<number>>;
}

//the actual context object
export const StateContext = createContext<IState>(defaultState as IState);

//and finally the provider for the context
export const StateContextProvider: React.FC<JSX.Element> = (props: PropsWithChildren<React.ReactNode>) => {
    const [name, setName] = useState(defaultState.name);
    const [navBarHeight, setNavBarHeight] = useState(defaultState.navBarHeight);



    return (
        <StateContext.Provider
            value={{
                name,
                setName,
                navBarHeight,
                setNavBarHeight

            }}>
            {props.children}
        </StateContext.Provider>
    );
};
