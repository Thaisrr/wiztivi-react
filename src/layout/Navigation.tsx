import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';
import {useAppSelector} from "../utils/hooks/useStore.ts";
import {cartLength} from "../store/CartSlice.ts";
import {useLogin} from "../utils/hooks/useLogin.ts";
const Navigation = () => {
    const links = [
        {name: 'Présentation', path: '/'},
        {name: 'Reactivité', path: '/reactivite'},
        {name: 'Props', path: '/parent'},
        {name: 'Hooks', path: '/hooks'},
        {name: 'Formulaires', path: '/form'},
        {name: 'Store', path: '/store'},
        {name: 'Protégée', path: '/protected'},
        {name: 'React Query', path: '/query'}
    ]
    const {logoutFunc: logout} = useLogin();

    const user = useAppSelector(state => state.user);

    //const cart = useAppSelector(state => state.cart);
    const cart = useAppSelector(cartLength);

    return (
        <nav className='Nav'>
            <ul>
                {
                    links.map(l => (
                        <li key={l.name}>
                            <NavLink to={l.path}>{l.name}</NavLink>
                        </li>
                    ))
                }
                <li>
                    <NavLink to={{
                        pathname: '/router/12',
                        search: 'name=JeanMichel',
                    }} state={{message: 'Hello World'}}>Router</NavLink>
                </li>
                {!user ? (
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                ) :
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                }
                <li>
                    Panier: {cart}
                </li>
            </ul>
        </nav>
    )
}
export default Navigation;