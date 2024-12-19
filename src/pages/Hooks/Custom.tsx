import {useMouseLocation} from "../../utils/hooks/useMouseLocation.ts";

const Custom = () => {

    const {x, y} = useMouseLocation();

    return (
        <>
            <h1>Custom Hook</h1>

            <p>X: {x}</p>
            <p>Y: {y}</p>
        </>
    )

}

export default Custom;