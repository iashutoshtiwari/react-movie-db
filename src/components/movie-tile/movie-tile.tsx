import React from "react"
import MovieImage from "../movie-image/movie-image"
import "./movie-tile.css"
type Props = {
  movieData: any
}

const MovieTile: React.FC<Props> = props => {
  const { movieData } = props

  console.log(movieData)

  return (
    <div className="movie-tile-container">
      <div className="tile-left-container">
        <MovieImage path={movieData?.poster_path} label={movieData?.title} />
      </div>
      <div className="tile-right-container">{movieData?.title}</div>
    </div>
  )
}

export default MovieTile
