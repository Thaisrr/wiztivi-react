import {NavLink} from "react-router-dom";
import '../styles/Navigation.css';
const Navigation = () => {
    const links = [
        {name: 'Présentation', path: '/'},
        {name: 'Reactivité', path: '/reactivite'},
        {name: 'Props', path: '/parent'},
        {name: 'Hooks', path: '/hooks'},
        {name: 'Formulaires', path: '/form'},
    ]
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
            </ul>
        </nav>
    )
}
export default Navigation;