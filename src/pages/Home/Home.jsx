import { getTrendingMovies } from 'api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';

export default function Home() {
  const [trendings, setTrendings] = useState([]);

  getTrendingMovies()
    .then(response => setTrendings(response.data.results))
    .catch(err => console.log(err.message));
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList moviesData={trendings} />
    </div>
  );
}
