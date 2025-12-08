import React, {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

const defaultState = {
    name: "",
    navBarHeight: 0,
};

interface IState {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    navBarHeight: number;
    setNavBarHeight: Dispatch<SetStateAction<number>>;
}

export const StateContext = createContext<IState>(defaultState as IState);

interface StateContextProviderProps {
    children?: ReactNode;
}

export const StateContextProvider: React.FC<StateContextProviderProps> = ({children}) => {
    const [name, setName] = useState(defaultState.name);
    const [navBarHeight, setNavBarHeight] = useState(defaultState.navBarHeight);

    return (
        <StateContext.Provider
            value={{
                name,
                setName,
                navBarHeight,
                setNavBarHeight,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};
