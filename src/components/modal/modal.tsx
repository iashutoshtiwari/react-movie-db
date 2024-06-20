import React, { useRef, useEffect } from "react"
import { RELEASE } from "../../utils/strings"
import "./modal.css"

/************************************************************
 *Name: Modal
 *Description: Display a modal when the tile is clicked
 ************************************************************/

//Type interface for props
interface Props {
  show: boolean
  onClose: () => void
  movieData: any
}

const Modal: React.FC<Props> = props => {
  //ref of the dialog
  const dialogRef = useRef<HTMLDialogElement>(null)

  //Props
  const { show = false, onClose = () => {}, movieData } = props

  //show or close modal based on the show prop
  useEffect(() => {
    if (show && dialogRef.current) {
      dialogRef.current.showModal()
    } else if (!show && dialogRef.current) {
      dialogRef.current.close()
    }
  }, [show])

  return (
    <dialog ref={dialogRef} className="dialog-modal">
      <div className="modal-header">
        <h2>{movieData?.title}</h2>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="modal-content">{RELEASE + movieData?.release_date}</div>
      <div className="modal-content">{movieData?.overview}</div>
    </dialog>
  )
}

export default Modal
