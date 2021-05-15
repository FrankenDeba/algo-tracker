import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card"
import "./CardsHolderStyle.css"

function CardsHolder(props) {
    const data = useSelector(state => state.data)
    // const { data } = state
    const [cards, setCards] = useState(data)
    useEffect(() => {
        setCards(data)
        console.log(cards);
    },[])
    return (
        <div className = "cards__holder__container">
            {Object.values(cards).map((card, index) => {
                return <Card data = {card} key = {card.key} />
            })}
        </div>
    )
}

export default CardsHolder
