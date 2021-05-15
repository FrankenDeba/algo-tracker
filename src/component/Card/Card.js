import React, { useState } from 'react'
import "./CardStyle.css"
function Card(props) {
    const { data } = props
    const [hovered, setHovered] = useState(false)
    const status = data.hasStarted ? 
                            <div className = "status">
                                <p className = "no__of__done">{data.noOfDone}</p> 
                                <p>&nbsp;/&nbsp;{data.noOfQuestions} </p> 
                                <p className = "no__of__questions">has done</p>
                            </div>
                            :
                            <p className = "not__started__text">not yet started</p>
    return (
        <div className = {`card__container ${hovered ? "hovered" : ""}`} onMouseOver = {() => setHovered(true)}>
            <p className = "topic">{data.category}</p>
            <div className = "questions__count">
                <p className = "total__question__para">Total Questions: </p>
                <p className = "no__of__questions">{data.noOfQuestions}</p>
            </div>
            {status}
        </div>
    )
}

export default Card
