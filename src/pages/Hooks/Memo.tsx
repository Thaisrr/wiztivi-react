import {useCallback, useMemo, useState} from "react";
import ChildMemo from "../../layout/ChildMemo.tsx";

const Memo = () => {
    const [notes, setNotes] = useState([12, 15, 14, 18, 8]);
    const moyenne = () => {
        console.log('Calcul de la moyenne non mémoïsé')
        const sum = notes.reduce((sum: number, curr: number) => sum + curr,0);
        return sum / notes.length;
    }

    const moyenneMemo = useMemo(() => {
        console.log('Calcul de la moyenne mémoïsé')
        const sum = notes.reduce((sum: number, curr: number) => sum + curr,0);
        return sum / notes.length;
    }, [notes]);

    const [counter, setCounter] = useState(0);
    const increment = () => setCounter((p) => p + 1);

    const moyenneCallback = useCallback((color: string) => {
        console.log('%c Calcul de la moyenne mémoïsé', `background: ${color}`)
        const sum = notes.reduce((sum: number, curr: number) => sum + curr,0);
        return sum / notes.length;
    }, [])

    return (
        <>
            <h1>La Mémoïsation</h1>
            <p>Moyenne de {notes.join(', ')} = {moyenne()}</p>
            <p>Moyenne callback = {moyenneCallback('aqua')}</p>
            <p>Moyenne de {notes.join(', ')} = {moyenneMemo}</p>
            <p>Compteur {counter} <button onClick={increment}>+</button> </p>

            <p>
                <button onClick={() => setNotes([...notes, 1])}>1</button>
                <button onClick={() => setNotes([...notes, 2])}>2</button>
                <button onClick={() => setNotes([...notes, 3])}>3</button>
                <button onClick={() => setNotes([...notes, 4])}>4</button>
                <button onClick={() => setNotes([...notes, 5])}>5</button>
            </p>

            <ChildMemo counter={counter} />
        </>
    )
}

export default Memo;