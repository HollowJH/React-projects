import { fetchMovies } from "./fetchMovies";

export function debounce(callback, delay) {
    let timeoutID;

    return function(...args) {
        if (timeoutID) {
            clearTimeout(timeoutID);
        } else {
            console.log("noID", timeoutID);
        }

        timeoutID = setTimeout(() => {
            callback(...args);
            console.log("Callback executed, timeoutID:", timeoutID);
        }, delay);

        console.log("New timeoutID:", timeoutID);
    };
}

export const debouncedFetchMovies = debounce((query, setMovies, setError) => {
    fetchMovies((movies) => setMovies(movies), query, setError);
}, 300);