import { getSearchedMovie } from 'api';
import {  useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

   const location = useLocation();

  const [searchedMovie, setSearchedMovie] = useSearchParams();
  const query = searchedMovie.get('query') ?? '';

  const updateQueryString = e => {
    const nextParams = e.target.value !== '' ? { query: e.target.value } : {};
    setSearchedMovie(nextParams);
  };

  const onMovieSearch = e => {
    e.preventDefault();
    getSearchedMovie(query)
      .then(response => setMovies(response.data.results))
      .catch(err => console.log(err.message))
      .finally();
  };

  return (
    <div>
      <form onSubmit={onMovieSearch}>
        <input type="text" value={query} onChange={updateQueryString} />
        <button>Search</button>
      </form>
      <ul>
        {movies.map(({ id, original_title, original_name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{from: location}}>{original_title ?? original_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
