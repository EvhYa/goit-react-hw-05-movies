import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function getTrendingMovies() {
  const response = await axios.get('3/trending/all/day?language=en-US', {
    params: {
      api_key: '28162e51daaad97e3103034197603022',
    },
  });
  return response;
}

export async function getSearchedMovie(q) {
  const response = await axios.get(
    '3/search/movie?include_adult=false&language=en-US&page=1',
    {
      params: {
        api_key: '28162e51daaad97e3103034197603022',
        query: q,
      },
    }
  );
  return response;
}

export async function getMovieDetails(id) {
  const response = await axios.get(`3/movie/${id}?language=en-US`, {
    params: {
      api_key: '28162e51daaad97e3103034197603022',
    },
  });
  return response;
}

export async function getCast(id) {
  const response = await axios.get(`3/movie/${id}/credits?language=en-US`, {
    params: {
      api_key: '28162e51daaad97e3103034197603022',
    },
  });
  return response;
}

export async function getReviews(id) {
  const response = await axios.get(
    `3/movie/${id}/reviews?language=en-US&page=1`,
    {
      params: {
        api_key: '28162e51daaad97e3103034197603022',
      },
    }
  );
  return response;
}
