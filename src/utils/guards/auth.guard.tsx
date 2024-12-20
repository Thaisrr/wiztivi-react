import {JSX} from "react";
import {isLogged} from "../services/Auth.service.ts";
import {Navigate} from "react-router-dom";

const AuthGuard = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    if(isLogged()) return children;
    return <Navigate to='/login' replace />
}

export default AuthGuard