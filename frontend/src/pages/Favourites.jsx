import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favourite() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourite Movies</h2>
        <div className='movies-grid'>
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='favourites-empty'>
      <h2>You Have No Favourite Movies Yet</h2>
      <p>Start adding movies to your favourites and they will show up here</p>
    </div>
  );
}

export default Favourite;
