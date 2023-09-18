export function Form({ setSearchedMovie }) {
  const onMovieSearch = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchedMovie({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <form onSubmit={onMovieSearch}>
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
}
