import {Character} from "../types/Character.ts";

export const getCharacters = async () => {
    const res = await fetch('http://localhost:3000/starWars');
    if(!res.ok) throw new Error('Erreur lors du fetch');
    return await res.json();
}

export const createCharacter = async (name: string) => {
    const res = await fetch('http://localhost:3000/starWars', {
        body: JSON.stringify({name}),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
    if(!res.ok) throw new Error('Erreur lors du post');
    return res.json();
}

export const updateCharacter = async (character: Character) => {
    const res = await fetch('http://localhost:3000/starWars/' + character.id, {
        body: JSON.stringify(character),
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}
    });
    if(!res.ok) throw new Error('Erreur lors du patch');
    return res.json();
}

export const deleteCharacter = async (id: number) => {
    const res = await fetch('http://localhost:3000/starWars/' + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(!res.ok) throw new Error('Erreur lors du patch');
    return res.json();
}