export function Form({ onMovieSearch, updateQueryString, query }) {
  return (
    <form onSubmit={onMovieSearch}>
      <input type="text"  name='query' />
      <button>Search</button>
    </form>
  );
}