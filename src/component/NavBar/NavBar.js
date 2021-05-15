import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import "./NavBarStyle.css"

function NavBar() {
    const [clickedTab, setClickedTab] = useState(0)
    return (
        <div className = "navbar__container">
            <div className = "navbar__buttons__container">
                <Router>
                    <div className = "table__button" 
                    //style = {clickedTab === 0 ? {borderBottom: "none"} : {}} 
                    >
                        <Link className = "nav__link" to = "/table">Table</Link>
                    </div>
                    <div className = "dashboard__button" 
                    //style = {clickedTab === 1 ? {borderBottom: "none"} : {}} 
                    >
                        <Link to = "/dashboard" className = "nav__link">Dashboard</Link>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default NavBar
