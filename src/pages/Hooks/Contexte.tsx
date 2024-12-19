import React, {createContext, useContext, useRef, useState} from "react";

const MessageContext = createContext<{
    message: string,
    setMessage: React.Dispatch<React.SetStateAction<string>>
} | null>(null);

const Contexte = () => {
    const [message, setMessage] = useState(`Don't forget to update your counter !`);


    return (
        <>
            <MessageContext.Provider value={{message, setMessage}}>
                <h1>Le Contexte</h1>
                <p>Message dans parent : {message}</p>

                <ContextChild1 />
                <ContextChild2 />

            </MessageContext.Provider>
        </>
    )
}

export default Contexte;

const ContextChild1 = () => {
    console.log('Child 1')
    return <h2>Coucou from child 1</h2>
}

const ContextChild2 = () => {
    console.log('Child 2');
    const message = useContext(MessageContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const newMsg = inputRef?.current?.value;
        if(newMsg) message?.setMessage(newMsg);
    }
    return (
        <>
            <h2>Child 2</h2>
            <p>{message?.message}</p>
            <p>
                <label htmlFor='newMsg'>Nouveau message : </label>
                <input ref={inputRef}/>
                <button onClick={save}>Save</button>
            </p>
        </>
    )
}