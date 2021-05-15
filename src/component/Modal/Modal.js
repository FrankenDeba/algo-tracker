import React, { useRef } from 'react'
import "./ModalStyle.css"

function Modal({ modalHeading, showAddFeedPopup, data, isSmallPopup }) {
  const modalHeaderRef = useRef()
  const modalBodyRef = useRef()
  const modalFooterRef = useRef()
  const checkClickPosition = (e) => {
    if (modalBodyRef.current && !modalBodyRef.current.contains(e.target) && 
    modalHeaderRef.current && !modalHeaderRef.current.contains(e.target) && 
    modalFooterRef.current && !modalFooterRef.current.contains(e.target))
      showAddFeedPopup()
  }
  return (
    <div className = "modal__container" onClick = {checkClickPosition}>
      <div className = "modal__header" ref = {modalHeaderRef}>
        {modalHeading}
        <div className = "modal__close__button" onClick = {showAddFeedPopup}>
          x
        </div>
      </div>
      <div className = "modal__body" ref = {modalBodyRef}>
        {data && data.ques}
      </div>
      {!isSmallPopup && <div className = "modal__footer" ref = {modalFooterRef}>
        <div className = "modal__submit__btn">SUBMIT</div>
      </div>
      }
    </div>
  )
}

export default Modal
