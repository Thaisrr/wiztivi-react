import {Movie} from "./Movie.ts";

export type User = {
    username: string,
    email: string,
    password: string;
    title: string,
    choice: 'place' | 'away'
    confirm: boolean,
    favoriteMovie: Omit<Movie, 'id' | 'rating'>,
}