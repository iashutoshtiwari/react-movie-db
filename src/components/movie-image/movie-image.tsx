import { TMDB_BASE_IMAGE_URL } from "../../utils/strings"

const MovieImage = ({ path, label }) => {
  const imagePath = TMDB_BASE_IMAGE_URL + path
  console.log(path)
  return (
    <div>
      <img src={imagePath} aria-label={label} />
    </div>
  )
}

export default MovieImage
