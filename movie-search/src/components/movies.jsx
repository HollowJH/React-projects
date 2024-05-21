/* eslint-disable react/prop-types */
export function Movies({ movies, sorted}) {
	const finalMovies = sorted ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title)) : movies
	
	return <>
		{movies && <div className="movies">
			{finalMovies.map(element => {
				return <div className="movie" key={element.imdbID}>
						<ul>
							<li><img src={element.Poster} alt={element.Title} /></li>
							<li><a href={`https://www.imdb.com/title/${element.imdbID}/`}><h3 className="movie-title">{element.Title}</h3></a></li>
							<li><p>{element.Year}</p></li>
						</ul>
					</div>
			})}
		</div>}
	</>
}