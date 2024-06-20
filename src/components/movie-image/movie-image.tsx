import React from "react"
import { TMDB_BASE_IMAGE_URL } from "../../utils/strings"
import "./movie-image.css"

/************************************************************
 *Name: MovieImage
 *Description: Image of the movie as fetched from the API
 ************************************************************/

type Props = {
  path: string
  label: string
}

const MovieImage: React.FC<Props> = props => {
  //Props
  const { path, label } = props

  const imagePath = TMDB_BASE_IMAGE_URL + path

  return (
    <div className="movie-image-container">
      <img className="movie-image" src={imagePath} aria-label={label} />
    </div>
  )
}

export default MovieImage
