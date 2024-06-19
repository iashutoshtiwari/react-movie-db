import { useEffect, useState } from "react"
import "./styles/App.css"
import { getPopularMovies } from "./api/api"
import Spinner from "./components/spinner/spinner"
import MovieImage from "./components/movie-image/movie-image"

function App() {
  const [movieList, setMovieList] = useState([])
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      getPopularMovies().then(data => {
        console.log(data)
        setMovieList(data?.results)
        setShowSpinner(false)
      })
    }, 2000)
  }, [])

  return showSpinner ? (
    <Spinner />
  ) : (
    <div>
      <h1>Test</h1>
      {movieList.map(movie => (
        <MovieImage path={movie?.poster_path} />
      ))}
    </div>
  )
}

export default App
