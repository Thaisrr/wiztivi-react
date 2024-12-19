import {useForm} from "react-hook-form";
import {User} from "../utils/types/User.ts";

const Formulaire = () => {

    const {register, handleSubmit, formState: {errors}, watch, getValues} = useForm<User>();

    const watchPassword = watch('password');

    const save = (user: User) => {
        console.log(user);
    }
    return (
        <>
            <h1>Formulaires</h1>

            <form onSubmit={handleSubmit(save)}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input id='username' {...register('username', {required: true, minLength: 3})} />
                    {errors?.username?.type === 'required' && <p className='red'>Username requis</p>}
                    {errors?.username?.type === 'minLength' && <p className='red'>Username trop court</p>}
                </div>
                <div>
                    <label htmlFor='email'>Adresse Courriel</label>
                    <input id='email' {...register('email', {
                        pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Format invalide'},
                        required: 'Email obligatoire'
                    })} />
                    <p className='red'>{errors?.email?.message}</p>
                </div>
                <div>
                    <label htmlFor='password'>Mot de passe</label>
                    <input type='password' {...register('password', {
                        validate: (value) => (value === 'password') || 'Le mot de passe doit être "password"'
                    })} />
                    <p className='red'>{errors?.password?.message}</p>
                    {watchPassword === 'password' && <p className='green'>Bravo !</p>}
                </div>
                <div>
                    <label htmlFor='title'>Titre</label>
                    <select id='title' {...register('title')}>
                        <option value='empress'>Impératrice</option>
                        <option value='jedi'>Jedi</option>
                    </select>
                </div>
                <fieldset>
                    <legend>Choix</legend>
                    <div>
                        <label htmlFor='place'>Sur place</label>
                        <input id='place' type={"radio"} value={"place"} {...register('choice')} />
                    </div>
                    <div>
                        <label htmlFor='away'>A emporter</label>
                        <input id='away' type={"radio"} value={"away"} {...register('choice')} />
                    </div>
                </fieldset>
                <div>
                    <label htmlFor='confirm'>Confirmer?</label>
                    <input type='checkbox' {...register('confirm')}/>
                </div>
                <fieldset>
                    <legend>Film préféré</legend>

                    <div>
                        <label htmlFor='mtitle'>Titre</label>
                        <input id='mtitle' {...register('favoriteMovie.title', {
                            validate: (value) => {
                                if(getValues('favoriteMovie.synopsis') && !value) {
                                    return 'Doit être obligatoire si il y a un synopsis !'
                                }
                                return true
                            }
                        })}/>
                    </div>
                    <div>
                        <label htmlFor='syn'>Synopsis</label>
                        <input id='syn' {...register('favoriteMovie.synopsis')}/>
                    </div>
                </fieldset>
                <p>
                    <button>Save</button>
                </p>
            </form>
        </>
    )
}

export default Formulaire;