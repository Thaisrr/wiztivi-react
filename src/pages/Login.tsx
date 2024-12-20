import {useForm} from "react-hook-form";
import {useLogin} from "../utils/hooks/useLogin.ts";
import {User} from "../utils/types/User.ts";

const Login = () => {

    const {register, handleSubmit} = useForm<Pick<User, 'email' | 'password'>>();
    const {loginFunc: login}= useLogin();
    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(login)}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' {...register('email', {required: true})}/>
                </div>
                <div>
                    <label htmlFor='pwd'>Mot de passe</label>
                    <input id='pwd' type='password' {...register('password', {required: true})}/>
                </div>
                <button>Login</button>
            </form>
        </>
    )
}
export default Login;