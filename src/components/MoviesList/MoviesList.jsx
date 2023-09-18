import { Link, useLocation } from 'react-router-dom';

export function MoviesList({ moviesData }) {
  const location = useLocation();
  return (
    <ul>
      {moviesData.map(({ id, original_title, original_name }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {original_title ?? original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
