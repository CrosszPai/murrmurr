import React from 'react'

function useClickOutside(ref: React.MutableRefObject<HTMLElement>, except: React.MutableRefObject<HTMLElement>, callback: () => void) {
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target) && except?.current && !except?.current.contains(event.target)) {
                callback()
                return
            }
            if (ref.current && !ref.current.contains(event.target) && !except) {
                callback()
                return
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref,except,callback]);
}

export default useClickOutside;