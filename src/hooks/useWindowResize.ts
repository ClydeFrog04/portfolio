import {useEffect, useLayoutEffect, useState} from "react";

export const useWindowResize = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    // const breakpoint = 480;//from variables.scss
    const root = document.getElementById("root");


    // useLayoutEffect(() => {
    //     const updateDimensions = () => {
    //         console.log("Updating dimensions!");
    //         if(window.innerWidth <= breakpoint){
    //             setDimensions({
    //                 width: window.innerWidth,
    //                 height: window.innerHeight,
    //             });
    //         }
    //     };
    //     window.addEventListener("resize", updateDimensions);
    //     updateDimensions();
    //     return () => window.removeEventListener("resize", updateDimensions);
    // }, []);
    useEffect(() => {
        const debounceHandler = debounce(() => {
            console.log("resetting dimensions");
            setDimensions({
                // width: window.innerWidth,
                // height: window.innerHeight
                width: root?.clientWidth || window.innerWidth,
                height: root?.clientHeight || window.innerHeight
            });
        }, 100);
        window.addEventListener("resize", debounceHandler);
        return () => window.removeEventListener("resize", debounceHandler);
    }, []);
    return dimensions;
};


const debounce = (callback: () => any, timeout: number) => {
    //@ts-ignore
    let timer: NodeJS.Timer | null;
    return () => {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout((...args: any) => {
            timer = null;
            callback.apply(this, args);
        }, timeout);
    };
};
