import '../styles/Presentation.css';

const LoggedBlock = () => (
    <div>
        <h3>Bonjour Jean Michel</h3>
        <p>
            <button>Voir mon profil</button>
            <button>Me Déconnecter</button>
        </p>
    </div>
);

const LogoutBlock = () => (
    <div>
        <h3>Vous n'êtes pas connecté•e !</h3>
        <p>
            <button>Login</button>
        </p>
    </div>
)

const Presentation = () => {
    const age = 200;
    const name = 'Jean Michel';
    const isLogged = false;
    const jsx = <span>Je suis un span</span>;
    const stringReloue = `{Je suis une string relou} -> avec des <crichets> ""`;

    const maClasse = 'red';
    const logout = 'logout';
    const image = {
        url: 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif',
        description: 'Le plus beau chat à lunettes',
        titre: 'Galaxy Cat',
    }

    const Fruits = () => {
        const lis = fruits.map(f => <li key={'l2' + f}>{f}</li> );
        return <ul>{lis}</ul>
    }

    const FruitsP = () => {
        const lis = fruits.reduce((prev: JSX.Element[], val) => {
            if(val.startsWith('P')) {
                prev.push(<li key={'l3' + val}>{val}</li>)
            }
            return prev;
        }, [])
        return <ul>{lis}</ul>
    }

    type roleType = 'USER' | 'ADMIN' | 'SUPER';
    let role: roleType;
    role = 'USER';

    // Assignation conditionnelle
    let foo;
    foo = foo || 'default';
    foo ||= 'default';

    foo = foo && 'nouvelle valeur';
    foo &&= 'nouvelle valeur';

    foo = foo ?? 'default si undefined';
    foo ??= 'default si undefined';

    const fruits = ['Pommes', 'Bananes', 'Poires'];

    // TODO : pourquoi ça bug ?
    const Role = () => {
        switch (role) {
            case "USER":
                return <p>Vous êtes un•e Gueux•se</p>
          /*  case "ADMIN":
                return <p>Pas Mal !</p>
            case 'SUPER':
                return <p>Vous êtes tout•e puissant•e</p>
           */
            default:
                return <p>Mais qui êtes vous ?</p>
        }
    }

    return (
        <>
            <h1>Présentation</h1>

            <section>
                <h2>L'interpolation</h2>

                <p>1 + 1 = {1 + 1}</p>
                <p>{age}</p>
                <p>{name}</p>
                <p>Boolean : {isLogged} ( ne s'affiche pas )</p>
                <p>{isLogged ? 'Connecté•e' : 'Pas connecté•e'}</p>
                <p>{jsx}</p>
                <p>{'<>'}</p>
                <p>{'{}'}</p>
                <p>{stringReloue}</p>
            </section>

            <section>
                <h2>Data Binding / Attribute Binding</h2>

                <p className={maClasse}>J'ai la classe "red"</p>
                <p className={isLogged? 'logged' : logout}></p>

                <figure>
                    <img src={image.url} alt={image.description} />
                    <figcaption>{image.titre}</figcaption>
                </figure>

            </section>

            <section>
                <h2>Le style</h2>

                <p style={ {color: 'blue', fontSize: '1.2em', fontFamily: 'sans-serif'} }>
                    Un très beau paragraphe
                </p>
            </section>

            <section>
                <h2>Gestion des images locales</h2>

                <p>Pour les images en HTML : les images doit se trouver dans le dossier public</p>
                <img src='logo192.png' alt='logo react'/>

                <p>Pour les images en CSS, on met les images dans src</p>

                <p className='bg'></p>

                {/* un commentaire */}
            </section>

            <section>
                <h2>Rendu Conditionnel</h2>

                <p>
                    {isLogged? 'Connecté•e' : 'Connectez-vous !'}
                </p>

                {isLogged?
                    <p>Vous êtes bien connecté•e</p>
                    : <p>Veuillez vous connecter</p>
                }

                {isLogged? <LoggedBlock /> : <LogoutBlock /> }

                <Role />

                { isLogged && <button>Logout</button>}
                {age ?? <p>Age non renseigné</p>}
            </section>

            <section>
                <h2>Les boucles</h2>

                <ul>
                    {fruits.map(f => <li key={'l1' + f}>{f}</li>)}
                </ul>

                <Fruits />

                <FruitsP />

            </section>

        </>
    )
}

export default Presentation;