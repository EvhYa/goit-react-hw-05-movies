import { getReviews } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId)
      .then(response => setReviews(response.data.results))
      .catch(err => console.log(err.message));
  }, [movieId]);

  const result = reviews.length ? (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h5>{author}</h5>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>No reviews yet</p>
  );

  return result;
}
