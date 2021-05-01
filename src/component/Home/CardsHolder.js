import React, { useState, useEffect } from 'react'
import Card from "../Card/Card"
import "./CardsHolderStyle.css"

const initialCards = [{
    key: 0,
    category: "Array",
    noOfQuestions: 5,
    hasStarted: false,
    noOfDone: 0,
    questions: [
        {title: "Find minimum and maximum element in an array",
        link: "https://practice.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4428/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays"},

        {
            title: "C++ Arrays (Sum of array) ",
            link: "https://practice.geeksforgeeks.org/problems/c-arrays-sum-of-array-set-14805/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays"
        },
        {
            title: "Cyclically rotate an array by one",
            link: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1/?category[]=Arrays&category[]=Arrays&page=1&query=category[]Arrayspage1category[]Arrays"
        },
        {
            title: "",
            link: ""
        },
        {
            title: "",
            link: ""
        }

    ]
},
{
    key: 1,
    category: "Strings",
    noOfQuestions: 3,
    hasStarted: true,
    noOfDone: 2,
    questions: [
        {
            title: "",
            link: ""
        },
        {
            title: "",
            link: ""
        },
        {
            title: "",
            link: ""
        }
    ]
},
{
    key: 2,
    category: "Linked List",
    noOfQuestions: 4,
    hasStarted: true,
    noOfDone: 1,
    quesstions: [
        {
            title: "",
            link: ""
        },
        {
            title: "",
            link: ""
        },
        {
            title: "",
            link: ""
        },
        {
            title: "",
            link: ""
        }
    ]
}]

function CardsHolder(props) {
    const [cards, setCards] = useState(initialCards)
    useEffect(() => {
        setCards(initialCards)
        console.log(cards);
    },[])
    return (
        <div className = "cards__holder__container">
            {cards.map((card, index) => {
                return <Card data = {card} key = {card.key} />
            })}
        </div>
    )
}

export default CardsHolder
