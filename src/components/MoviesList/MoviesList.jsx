import { Link } from 'react-router-dom';

export function MoviesList({ moviesData, location, link }) {
  return (
    <ul>
      {moviesData.map(({ id, original_title, original_name }) => (
        <li key={id}>
          <Link to={`${link + id}`} state={{ from: location }}>
            {original_title ?? original_name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
