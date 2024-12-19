import React from "react";

type MyState = {counter: number}
type MyProps = Object;
class Classes extends React.Component<MyProps, MyState> {
    message = 'Hello World';

    state: MyState = {
        counter: 0,
    }

    interval?: number;

    increment() {
        this.setState({counter: this.state.counter + 1});
        console.log('increment', this.state.counter);
    }

    constructor(props: any) {
        super(props);
        console.log('Contructor de class component');
    }

    componentDidMount() {
        console.log('Did mount');
        // Pour lancer les actions au démarrage du composant
        let time = 0;
        this.interval = setInterval(() => {
            time++;
            console.log('Time', time);
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>): string {
        console.log('Before Update', prevProps, prevState);
        return 'Hello from before update';
    }

    componentDidUpdate(prevProps: Readonly<MyProps>, prevState: Readonly<MyState>, snapshot: string) {
        console.log('Did Update', prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('Unmount');
        // Pour nettoyer le composant, couper les souscriptions, ect...
        clearInterval(this.interval);
    }




    render() {
        return (
            <>
                <h1>Classe Component</h1>
                <p>{this.message}</p>
                <p>
                    Counter: {this.state.counter}
                    <button onClick={() => this.increment()}>+</button>
                </p>
            </>
        )
    }
}

export default Classes;