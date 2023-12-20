//https://css-tricks.com/styling-based-on-scroll-position/
// The debounce function receives our function as a parameter
export const debounce = (fn: Function) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame: number;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params: any[]) => {

        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
            cancelAnimationFrame(frame);
        }

        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {

            // Call our function and pass any params we received
            fn(...params);
        });

    };
};


// Reads out the scroll position and stores it in the data attribute,
// so we can use it in our stylesheets
export const storeScroll = () => {
    //@ts-ignore
    document.documentElement.dataset.scroll = window.scrollY;
    console.log("scroll type:", typeof document.documentElement.dataset.scroll);
};

// Listen for new scroll events, here we debounce our `storeScroll` function
// document.addEventListener('scroll', debounce(storeScroll), { passive: true });

// Update scroll position for first time
// storeScroll();

/**
 * this function will toggle the provided class on or off depending on if it is visible within the view port or not.
 * this is a repeated effect meaning it will toggle on and off per scroll
 * @param elem
 * @param className
 */
export const toggleClassOnVisible = (elem: HTMLElement, className: string) => {
    //observer pattern copied/modified from https://css-tricks.com/styling-based-on-scroll-position/
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
        console.log("There IS an observer available and watching!");
        let observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                elem.classList.remove(className);
            } else {
                elem.classList.add(className);
            }
        });
        observer.observe(elem);
    } else {
        console.log("There is no observer available");
    }
};

/**
 * this function will remove the provided class on or off depending on if it is visible within the view port or not.
 * this is a persistent effect meaning it will fire once and the removal will be permanent until the page is refreshed
 * @param elem
 * @param className
 * todo: make these methods dry since they are currently almost exactly the same :]
 */
export const removeClassOnVisible = (elem: HTMLElement, className: string) => {
    //observer pattern copied/modified from https://css-tricks.com/styling-based-on-scroll-position/
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
        console.log("There IS an observer available and watching!");
        let observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                elem.classList.remove(className);
            }
        });
        observer.observe(elem);
    } else {
        console.log("There is no observer available");
    }
};
