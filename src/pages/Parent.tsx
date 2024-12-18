import {Child1, Child2} from "../layout/Children.tsx";
import {Movie} from "../utils/types/Movie.ts";
import MovieCard from "../layout/MovieCard.tsx";
import {useState} from "react";
import MyButton from "../layout/MyButton.tsx";

const Parent = () => {
    const msg = 'Holà Mundo !';

    const book = {
        title: `L'Assassin Royal`,
        author: 'Robin Hobb',
    }

    const movie: Movie = {
        title: 'The Substance',
        synopsis: `C'est bien mais chelou`,
        rating: 8,
        poster: 'https://images.cinefil.com/movies/1170070.webp',
        id: 2,
    }

    const [movies, setMovies] = useState<Movie[]>([
        movie,
        {
            id: 1,
            title: 'Rocky III',
            poster: 'https://images.affiches-et-posters.com//albums/3/4619/medium/4619-affiche-film-rocky-3.jpg',
            rating: 7,
            synopsis: 'Baston !!!'
        }
    ])

    return (
        <>
            <h1>Parent</h1>
            {/* commentaire */}
            <Child1 message="Hello World !" />
            <Child1 message={msg} />

            <Child2 title={book.title} author={book.author} />
            <Child2 {...book} />

            <MovieCard movie={movie} />

            <div className='grid'>
                {movies.map(m => <MovieCard movie={m} key={m.id} />)}
            </div>

            <MyButton onClick={() => alert('Coucou')}>
                Dire Coucou
            </MyButton>

            <MyButton onClick={() => alert('Oh No ! ')} level='warn'>Action dangeureuse !</MyButton>
        </>
    )
}

export default Parent;