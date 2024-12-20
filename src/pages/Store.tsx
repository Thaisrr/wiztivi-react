import {useAppDispatch, useAppSelector} from "../utils/hooks/useStore.ts";
import {addToCart} from "../store/CartSlice.ts";
import {useAlert} from "../utils/hooks/useAlert.ts";

const Cart = ({cart}: {cart: string[]}) => {
    if(!cart.length) {
        return <p>Panier vide</p>
    }
    return <ul>
        {cart.map((c, i) => <li key={c + i}>{c}</li> )}
    </ul>
}

const Store = () => {
    const cart = useAppSelector(state => state.cart);
    const products = [`Chaussettes`, `Chocolat`, `PS5`, `Pyjama`, `Charentaises`, `Plaid moumoutte`];
    const dispatch = useAppDispatch();
    const createAlert = useAlert();
    return(
        <>
            <h1>Le Store Redux</h1>
            <h2>Mon panier</h2>
            <Cart cart={cart} />

            <h2>Produits</h2>
            <div className='grid'>
                {products.map(p => (
                    <article style={{textAlign: "center"}} className='card' key={p}>
                        <p>{p}</p>
                        <button onClick={() => dispatch(addToCart(p))}>Ajouter au panier</button>
                    </article>
                ))}
            </div>

            <h2>Alertes : </h2>
            <p>
                <button onClick={() => createAlert({text: 'Hello World', level: 'success', duration: 5000})} >Hello</button>
                <button onClick={() => createAlert({text: 'ça va barder !', level: 'warning', duration: 5000})} >Attention ! </button>
                <button onClick={() => createAlert({text: 'Booooooom !', level: 'error', duration: 5000})} >Ne pas cliquer ici !</button>
                <button onClick={() => createAlert({text: 'Tout va bien', level: 'info', duration: 5000})} >Cliquez plutôt ici</button>
            </p>
        </>
    )
}

export default Store;