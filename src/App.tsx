import { useEffect, useState } from "react"
import { getPopularMovies } from "./api/api"
import Spinner from "./components/spinner/spinner"
import MovieTile from "./components/movie-tile/movie-tile"
import Modal from "./components/modal/modal"
import { ERROR_TITLE, POPULAR_MOVIES } from "./utils/strings"
import "./styles/App.css"

function App() {
  //State variables
  const [movieList, setMovieList] = useState<any[]>([])
  const [showSpinner, setShowSpinner] = useState<boolean>(true)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<any>({})
  const [error, setError] = useState<boolean>(false)

  //API call to fetch movies list at page load
  useEffect(() => {
    //Added an intentional 3s timeout on API call to display spinner
    setTimeout(() => {
      getPopularMovies().then(response => {
        console.log(response)

        if (response?.status === 200 && typeof response?.data == "object") {
          setMovieList(response?.data?.results)
        } else {
          setError(response?.data)
        }
        setShowSpinner(false)
      })
    }, 3000)
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="main-container">
      {showSpinner ? (
        <Spinner />
      ) : error ? (
        <>
          <h1>{ERROR_TITLE}</h1>
          <span>{error}</span>
        </>
      ) : (
        <>
          <h1>{POPULAR_MOVIES}</h1>
          <div>
            {movieList?.map(movie => (
              <MovieTile
                key={movie?.id}
                movieData={movie}
                setModalData={setModalData}
                setShowModal={setShowModal}
              />
            ))}
          </div>
        </>
      )}
      <Modal show={showModal} onClose={closeModal} movieData={modalData} />
    </div>
  )
}

export default App
