//https://css-tricks.com/styling-based-on-scroll-position/
/**
 * this function will toggle the provided class on or off depending on if it is visible within the view port or not.
 * this is a repeated effect meaning it will toggle on and off per scroll
 * @param elem
 * @param className
 */
export const toggleClassOnVisible = (elem: HTMLElement, className: string) => {
    //observer pattern copied/modified from https://css-tricks.com/styling-based-on-scroll-position/
    scrollHelper(entries => {
        if (entries[0].isIntersecting) {
            elem.classList.remove(className);
        } else {
            elem.classList.add(className);
        }
    }, elem);
};

/**
 * this function will remove the provided class on or off depending on if it is visible within the view port or not.
 * this is a persistent effect meaning it will fire once and the removal will be permanent until the page is refreshed
 * @param elem
 * @param className
 */
export const removeClassOnVisible = (elem: HTMLElement, className: string) => {
    //observer pattern copied/modified from https://css-tricks.com/styling-based-on-scroll-position/
    scrollHelper(entries => {
        if (entries[0].isIntersecting) {
            elem.classList.remove(className);
        }
    }, elem);
};

/**
 * this is a helper function for intersectionObservers to keep stuff dry when adding new scroll effects!
 * @param fn this is the function to be called whenever the observer observes changes in intersection
 * @param elem the html element to observe!
 */
const scrollHelper = (fn: IntersectionObserverCallback, elem: HTMLElement) => {
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
        console.log("There IS an observer available and watching!");
        let observer = new IntersectionObserver(fn);
        observer.observe(elem);
    } else {
        console.log("There is no observer available");
    }
};
