import { useCallback, useRef, useState } from 'react'
import { Movies } from './components/movies.jsx'
import './App.css'
import { debouncedFetchMovies } from './services/debounce.js'

function App() {
  const [movies, setMovies] = useState(null)
  const search = useRef("")
  const [sorted, setSorted] = useState(false)
  const [error, setError] = useState("Type to start searching...")

  const validateSearch = useCallback((query) => {
    if (query === "") {
      setError("The title can't be empty...");
      search.current = ""
      setMovies(null);
      return -2;
    } else if (query.length < 2) {
      setError("Add more letters to start searching...");
      search.current = ""
      setMovies(null);
      return -1;
    } else if (query === search.current) {
      return 0;
    } else {
      search.current = query;
      debouncedFetchMovies(query, setMovies, setError);
    }
  }, []);

  const handleSearch = useCallback((event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    validateSearch(formData.get('search'));
  }, [validateSearch])


  return (
    <>
      <h1>Buscador de peliculas</h1>
      <form onSubmit={handleSearch} action="#">
        <input type="text" name="search" placeholder='Dune' onChange={(e) => validateSearch(e.target.value.trim())} />
        <input type="checkbox" name="sort" id="sort" onChange={()=>{setSorted(!sorted)}} />
        <button >Search</button>
      </form>
      <main>
        {movies && !error ? <Movies movies={movies} sorted={sorted}/> : <p>{error}</p>}
      </main>
    </>
  )
}

export default App
