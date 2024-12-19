import {useReducer} from "react";

type StateType = {counter : number}
type ActionType = {type: 'increment' | 'decrement' | 'incrementByAmount' | 'decrementByAmount' | 'reset', payload?: number}
const initialState = {counter: 0};
const reducer = (state: StateType, {type, payload = 0}: ActionType ) => {
    switch (type) {
        case "increment":
            return {counter: state.counter + 1};
        case "decrement":
            return {counter: state.counter - 1};
        case "incrementByAmount":
            return {counter: state.counter + payload};
        case "decrementByAmount":
            return {counter: state.counter - payload}
        case "reset":
            return initialState;
    }
}

const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>useReducer</h1>

            <p>Counter: {state.counter}</p>
            <p>
                <button onClick={()=> dispatch({type: 'increment'})}>++</button>
                <button onClick={()=> dispatch({type: 'decrement'})}>--</button>
                <button onClick={()=> dispatch({type: 'decrementByAmount', payload: 10})}>- 10</button>
                <button onClick={()=> dispatch({type: 'incrementByAmount', payload: 10})}>+ 10</button>
                <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
            </p>
        </>
    )
}

export default Reducer;