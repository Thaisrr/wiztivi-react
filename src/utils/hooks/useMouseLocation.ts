import {useEffect, useState} from "react";

export const useMouseLocation = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    function update(e: MouseEvent) {
        setX(e.x);
        setY(e.y);
    }

    useEffect(() => {
        window.addEventListener('mousemove', update);
        return () => window.removeEventListener('mousemove', update);
    }, []);

    return {x, y}

}