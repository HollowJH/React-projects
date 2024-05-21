export function fetchMovies(updateMovies, search, setError ) {
		return fetch(`https://www.omdbapi.com/?apikey=1a23a3fd&s=${search}`)
		.then(res => res.json())
		.then(x => {
			if(x?.Error) {
				setError(x.Error)
				return
			} else{
				setError(false)
				return updateMovies(x.Search)
			}
			
		})
}