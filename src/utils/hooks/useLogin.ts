import {User} from "../types/User.ts";
import {login, logout} from "../services/Auth.service.ts";
import {useAlert} from "./useAlert.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "./useStore.ts";
import {setUser} from "../../store/UserSlice.ts";

export const useLogin = () => {
    const createAlert = useAlert();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginFunc =  async (user: Pick<User, 'email' | 'password'>) => {
        try {
            const token = await login(user);
            createAlert({text: 'Welcome Back !', duration: 5000, level: 'success'});
            dispatch(setUser(token));
            navigate('/');
        } catch (e: any) {
            console.error(e);
            createAlert({text: e?.message || e, duration: 8000, level: 'error'})
        }
    }

    const logoutFunc = () => {
        logout();
        navigate('/login');
        dispatch(setUser(null))
    }

    return {loginFunc, logoutFunc}
}