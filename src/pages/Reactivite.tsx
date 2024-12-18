import {FormEvent, useState} from "react";


const Reactivite = () => {
    let counter = 0;
    const [counterReactive, setCounterReactive] = useState<number>(0);
    const [isLogged, setIsLogged] = useState(false);

    const login = () => {
        setIsLogged(prev => !prev);
    }


    const increment  = () => {
        counter++;
        console.log(counter);
    }

    const incrementReactive = () => {
        setCounterReactive(previous => previous + 1);
       // setCounterReactive(counterReactive + 1);
    }

    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form['task'] as  HTMLInputElement; // On passera par les ref par la suite
        console.log(input.value);
        const {value} = input;
        setTodos(prev => [ value, ...prev]);
        form.reset();
    }

    const deleteTodo = (index: number) => {
        const copy = [...todos];
        copy.splice(index, 1);
        setTodos(copy)
    }

    const LoggedBlock = () => (
        <div>
            <h3>Bonjour Jean Michel</h3>
            <p>
                <button>Voir mon profil</button>
                <button onClick={login}>Me Déconnecter</button>
            </p>
        </div>
    );
    const LogoutBlock = () => (
        <div>
            <h3>Vous n'êtes pas connecté•e !</h3>
            <p>
                <button onClick={login}>Login</button>
            </p>
        </div>
    )


    return (
        <>
            <h1>La Réactivité</h1>
            <section>
                <h2>Compteur basique</h2>
                <p>{counter}</p>
                <p>
                    <button onClick={increment}>++</button>
                </p>
            </section>
            <section>
                <h2>Compteur reactif</h2>
                <p>{counterReactive}</p>
                <p>
                    <button onClick={incrementReactive}>++</button>
                </p>
            </section>
            <section>
                <h2>Connexion</h2>

                {isLogged? <LoggedBlock /> : <LogoutBlock />}



            </section>
            <section>
                <h2>Todos</h2>

                <form onSubmit={addTodo}>
                    <label>Todo: <input name='task'/></label>
                    <button>Save </button>
                </form>

                <ul>
                    {
                        todos.map((td, i) => (
                            <li key={td + i}>
                                {td}
                                <button onClick={() => deleteTodo(i)}>X</button>
                            </li>
                        ))
                    }
                </ul>
            </section>

        </>
    )
}

export default Reactivite;