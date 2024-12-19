import {useEffect, useState} from "react";
import ChildEffect from "../../layout/ChildEffect.tsx";

const Effect = () => {

    console.log('Chargement du composant');
    const [counter, setCounter] = useState(0);
    let staticCounter = 0;

    const [message, setMessage] = useState<string>();

    const getMessageFromApi = () => {
        console.log('Getting message from API');
        setMessage('Api Message');
    }

    // Boucle infinie
    //getMessageFromApi();

    const increment = () => {
        setCounter((p) => p + 1)
    }

    const incrementStatic = () => {
        staticCounter++;
        console.log('Update static : ', staticCounter);
    }

    const [fruits, setFruits] = useState(['Pomme', 'Poire']);

    useEffect(() => {
        console.log('Use Effect');
        // Ne se lance qu'une fois au démarrage du composant
        getMessageFromApi();
    }, []);

    useEffect(() => {
        // se lance à chaque mise à jour, à ne pas faire
        console.log(`Sans dépendances`)
    });

    useEffect(() => {
        console.log('Counter mis à jour');
        // Ne pas modifier counter ici, sinon boucle infinie
    }, [counter]);

    useEffect(() => {
        console.log('Static counter mis à jour')
    }, [staticCounter]); // Jamais trigger sauf au démarrage

    useEffect(() => {
        console.log('Montage du composant')
        let time = 0;
        const interval = setInterval(() => {
            time++;
            // console.log(time)
        }, 1000)
        return () => {
            // démontage du composant
            console.log('Démontage du composant');
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        console.log('Counter', counter) // se print en 2ème
        return () => {
            console.log('Trigger quand counter est modifié', counter)  // Se print en 1er
        }
    }, [counter]);

    const addFruit = (fruit: string)=> {
        const copy = [...fruits];
        copy.push(fruit);
        setFruits(copy);
    }

    useEffect(() => {
        console.log('Fruits modifié')
    }, [fruits]);

    return (
        <>
            <h1>UseEffect</h1>

            <p>Counter: {counter} <button onClick={increment}>+</button> </p>
            <p>Static Counter: {staticCounter} <button onClick={incrementStatic}>+</button> </p>
            <p>Message API : {message}</p>

            <ul>
                {
                    fruits.map((f, i) => <li key={`${f}-${i}`}>{f}</li>)
                }
            </ul>
            <p>
                <button onClick={() => addFruit('Ananas')}>Ananas</button>
            </p>

            <ChildEffect fruits={fruits} />
        </>
    )
}

export default Effect;