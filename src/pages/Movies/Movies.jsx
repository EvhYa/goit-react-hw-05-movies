import { getSearchedMovie } from 'api';
import { Form } from 'components/Form/Form';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  const [searchedMovie, setSearchedMovie] = useSearchParams();
  

  // const updateQueryString = e => {
  //   const nextParams = e.target.value !== '' ? { query: e.target.value } : {};
  //   setSearchedMovie(nextParams);
  // };
 
 
  
  const onMovieSearch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchedMovie({ query: form.elements.query.value });
    form.reset();

    // getSearchedMovie(query)
    //   .then(response => setMovies(response.data.results))
    //   .catch(err => console.log(err.message));
  };

  useEffect(() => {
    const query = searchedMovie.get('query') ?? '';
    getSearchedMovie(query)
      .then(response => setMovies(response.data.results))
      .catch(err => console.log(err.message));
  }, [searchedMovie]);

  return (
    <div>
      <Form
        onMovieSearch={onMovieSearch}
        // updateQueryString={updateQueryString}
      />
      <MoviesList moviesData={movies} location={location} link={''} />
    </div>
  );
}
