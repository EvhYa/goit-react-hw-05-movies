import { getTrendingMovies } from 'api';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [trendings, setTrendings] = useState([]);
  const location = useLocation();
  getTrendingMovies()
    .then(response => setTrendings(response.data.results))
    .catch(err => console.log(err.message))
    .finally();
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendings.map(({ id, original_title, original_name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{from: location}}>{original_title ?? original_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
