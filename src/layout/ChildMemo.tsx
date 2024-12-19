import React from "react";

const ChildMemo = React.memo(
    ({counter}: {counter: number}) => {
        console.log('Child création')
        return (
            <>
                <h2>Child</h2>
                <p>Compteur : {counter}</p>
            </>
        )
    }
)
export default ChildMemo;