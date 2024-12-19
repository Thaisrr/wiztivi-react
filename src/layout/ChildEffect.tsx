import {useEffect} from "react";

const ChildEffect = ({fruits}: {fruits: string[]}) => {
    console.log(`%c [child] racine`, 'color: rebeccapurple')
    useEffect(() => {
        console.log(`%c [child] useEffect[]`, 'color: rebeccapurple');
        return () => {
            console.log(`%c [child] destruction`, 'color: rebeccapurple')
        }
    }, []);

    useEffect(() => {
        console.log(`%c [child] useEffect[fruits]`, 'color: rebeccapurple')
    }, [fruits]);

    return (
        <>
            <h1>Child</h1>

            <p>{fruits.join(', ')}</p>
        </>
    )
}
export default ChildEffect;