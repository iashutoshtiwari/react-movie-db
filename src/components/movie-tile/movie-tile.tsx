import React, { useState } from "react"
import MovieImage from "../movie-image/movie-image"
import Badge from "../badge/badge"
import { extractYear } from "../../utils/utility"
import { RATING } from "../../utils/strings"
import "./movie-tile.css"

/************************************************************
 *Name: MovieTile
 *Description: A Tile with basic info of the movie
 ************************************************************/

//Prop type
type Props = {
  movieData: any
  setModalData: any
  setShowModal: any
}

const MovieTile: React.FC<Props> = props => {
  //Props
  const { movieData, setModalData, setShowModal } = props

  //State variables
  const [showBadge, setShowBadge] = useState(false)

  const releaseYear = extractYear(movieData?.release_date)

  //CTA methods
  const onMovieTileClick = () => {
    setShowBadge(true)
    setModalData(movieData)
    setShowModal(true)
  }

  return (
    <div onClick={onMovieTileClick} className="movie-tile-container">
      {showBadge && <Badge />}
      <div className="tile-left-container">
        <MovieImage path={movieData?.poster_path} label={movieData?.title} />
      </div>
      <div className="tile-right-container">
        <span className="tile-title">{`${movieData?.title} (${releaseYear})`}</span>
        <span className="tile-rating">
          {RATING + movieData?.vote_average.toFixed(1)}
        </span>
      </div>
    </div>
  )
}

export default MovieTile
