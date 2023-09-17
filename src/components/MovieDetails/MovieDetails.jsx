import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'api';
import {
  AdditionalInformation,
  Back,
  MovieContainer,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(response => setMovieDetails(response.data))
      .catch(err => console.log(err.message));
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { poster_path, title, vote_average, overview, genres, release_date } =
    movieDetails;
  const date = new Date(release_date);
  const year = date.getFullYear();

  return (
    <div>
      <Link to={backLinkRef.current}>
        <Back>Go back</Back>
      </Link>
      <MovieContainer>
        {
          <img
            src={poster_path ? `${baseImgUrl + poster_path}` : defaultImg}
            alt={title}
          />
        }
        <div>
          <div>
            <h2>
              {title} ({isNaN(year) ? 'unknown' : year})
            </h2>
            <p>User score: {vote_average}</p>
          </div>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <ul>
              {genres?.map(genre => (
                <li key={genre.name}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </MovieContainer>
      <AdditionalInformation>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </AdditionalInformation>
    </div>
  );
}
