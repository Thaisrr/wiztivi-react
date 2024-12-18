import {Movie} from "../utils/types/Movie.ts";
import '../styles/MovieCard.css';
const MovieCard = ({movie}: {movie: Movie}) => {

    return (
        <div className='card'>
            <div className='header'>
                <img src={movie.poster} alt="" />
            </div>
            <div className='body'>
                <h3>{movie.title} {movie.rating}/10</h3>
                <p>{movie.synopsis}</p>
            </div>
        </div>
    )
}
export default MovieCard;