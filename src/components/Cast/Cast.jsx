import { getCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from './Cast.styled';

export function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) {
      return;
    }
    getCast(movieId)
      .then(response => setCast(response.data.cast))
      .catch(err => console.log(err.message));
  }, [movieId]);

  return (
    <Container>
      <ul>
        {cast?.map(({ cast_id, character, original_name, profile_path }) => (
          <li key={cast_id}>
            <Card>
              <img
                src={profile_path ? `${baseImgUrl + profile_path}` : defaultImg}
                alt={original_name}
              />
              <p>Character: {character}</p>
              <p>Name: {original_name}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Container>
  );
}
