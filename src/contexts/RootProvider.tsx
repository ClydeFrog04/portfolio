import React, {  ReactNode } from "react";
import { StateContextProvider } from "./StateContext";
import { StateContextProvider as SDContextProvider } from "@portfolio-monorepo/sourdough-calculator/src/contexts/StateContext.tsx";
import { StateContextProvider as RTTContextProvider } from "@portfolio-monorepo/react-tac-toe/src/StateContext.tsx";
import { StateContextProvider as SpotifyContextProvider } from "@portfolio-monorepo/SpotifyWeb/src/contexts/StateContext.tsx";

type Provider = React.ComponentType<{ children?: ReactNode }>;

const combineContexts = (...providers: Provider[]): Provider => {
    return providers.reduce(
        (AccumulatedProvider, CurrentProvider): Provider =>
            ({ children }) => (
                <AccumulatedProvider>
                    <CurrentProvider>{children}</CurrentProvider>
                </AccumulatedProvider>
            ),
        ({ children }) => <>{children}</>
    );
};

const providers: Provider[] = [
    StateContextProvider,
    SDContextProvider,
    RTTContextProvider,
    SpotifyContextProvider,
];

export const RootProvider = combineContexts(...providers);
