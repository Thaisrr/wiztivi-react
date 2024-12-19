import {NavLink, Outlet} from "react-router-dom";

const Index = () => {

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to=''>Class Component</NavLink>
                    </li>
                    <li>
                        <NavLink to='effect'>UseEffect</NavLink>
                    </li>
                    <li>
                        <NavLink to='memo'>Mémoïsation</NavLink>
                    </li>
                    <li>
                        <NavLink to='reducer'>Reducer</NavLink>
                    </li>
                    <li>
                        <NavLink to='contexte'>Contexte</NavLink>
                    </li>
                    <li>
                        <NavLink to='custom'>Custom Hook</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export default Index;