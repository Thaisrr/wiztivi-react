import {useMutation, useQuery} from "@tanstack/react-query";
import {Character} from "../utils/types/Character.ts";
import {createCharacter, deleteCharacter, getCharacters, updateCharacter} from "../utils/services/startwars.service.ts";
import {useRef} from "react";
import {useAlert} from "../utils/hooks/useAlert.ts";

const Tanstack = () => {

    const queryKey = ['starWars'];
    //const queryClient = useQueryClient();
    const {data, isLoading, isError, refetch} = useQuery<Character[]>({
        queryKey,
        initialData: () => [],
        queryFn: () => getCharacters(),
        //staleTime: 60000, // toutes les 60 sec
       // refetchOnWindowFocus: false
    });

    /***** Post Character *****/
    const inputRef = useRef<HTMLInputElement>(null);
    const createAlert = useAlert();

    const {mutate} = useMutation({
        mutationFn: (name: string) => createCharacter(name),
        // onSuccess: () => queryClient.invalidateQueries({queryKey}),
        onSuccess: () => refetch(),
        onError: () => createAlert({text: 'ça marche pas !', duration: 8000, level: "error"}),
        onSettled: () => console.log('Mutation terminée')
    });

    const postCharacter = () => {
        if(!inputRef.current) return;
        const name = inputRef.current.value;
        if(!name) return;
        mutate(name);
        inputRef.current.value = '';
    }

    /**** update *****/
    const {mutate: mutateUpdate} = useMutation({
        mutationFn: (char: Character) => updateCharacter(char),
        onSuccess: () => refetch()
    });

    const changeCharacter = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const name = e.target.value;
        mutateUpdate({name, id})
    }

    /***** Delete *****/
    const {mutate: mutateDel} = useMutation({
        mutationFn: (id: number) => deleteCharacter(id),
        onSuccess: refetch
    });

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Erreur !</p>
    return(
        <>
            <h1>React Query (Tanstack)</h1>

            <ul>
                {data?.map((char: Character) => (
                    <li key={char.id}>
                        <input
                            className='shadowed'
                            value={char.name}
                            onChange={(e) =>changeCharacter(e, char.id)}/>
                        <button onClick={() => mutateDel(char.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => refetch()}>Refresh</button>

            <h2>Post Character</h2>

            <div>
                <input ref={inputRef}/>
                <button onClick={postCharacter}>Post</button>
            </div>
        </>
    )
}

export default Tanstack;