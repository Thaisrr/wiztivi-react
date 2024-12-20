import {User} from "../types/User.ts";

const url = import.meta.env.VITE_API_URL;
export const login = async ( user: Pick<User, 'email' | 'password'>) => {
    const res = await fetch(`${url}login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'}
    });
    if(!res.ok) throw await res.text();
    const {token} = await res.json() as {token: string};
    localStorage.setItem('token', token);
    return {token};
}

export const logout = () => localStorage.removeItem('token');

export const isLogged = () => !!localStorage.getItem('token');

export const getToken = () => localStorage.getItem('token');