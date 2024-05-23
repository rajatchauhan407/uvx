import { useState, useEffect } from 'react';

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        // Set the initial state
        setMatches(media.matches);

        // Add event listener
        media.addEventListener('change', listener);

        // Remove event listener on cleanup
        return () => media.removeEventListener('change', listener);
    }, [query]);

    return matches;
}

export default useMediaQuery;
