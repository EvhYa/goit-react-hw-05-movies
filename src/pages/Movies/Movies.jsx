import { getSearchedMovie } from 'api';
import { Form } from 'components/Form/Form';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchedMovie, setSearchedMovie] = useSearchParams();
  
  useEffect(() => {
    const query = searchedMovie.get('query') ?? '';
    getSearchedMovie(query)
      .then(response => setMovies(response.data.results))
      .catch(err => console.log(err.message));
  }, [searchedMovie]);

  return (
    <div>
      <Form
        setSearchedMovie={setSearchedMovie}
      />
      <MoviesList moviesData={movies} location={location} link={''} />
    </div>
  );
}
