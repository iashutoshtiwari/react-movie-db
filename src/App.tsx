import { useEffect, useState } from "react"

import { getPopularMovies } from "./api/api"

import Spinner from "./components/spinner/spinner"
import MovieTile from "./components/movie-tile/movie-tile"

import { POPULAR_MOVIES } from "./utils/strings"

import "./styles/App.css"

function App() {
  const [movieList, setMovieList] = useState<object[]>([])
  const [showSpinner, setShowSpinner] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      getPopularMovies().then(data => {
        setMovieList(data?.results)
        setShowSpinner(false)
      })
    }, 3000)
  }, [])

  return (
    <div className="main-container">
      {showSpinner ? (
        <Spinner />
      ) : (
        <>
          <h1>{POPULAR_MOVIES}</h1>
          <div>
            {movieList.map(movie => (
              <MovieTile movieData={movie} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
