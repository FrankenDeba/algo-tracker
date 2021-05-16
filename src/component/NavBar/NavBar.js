import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"
import { ReactComponent as Tree } from "../../assets/tree.svg"
import "./NavBarStyle.css"

function NavBar() {
    const [clickedTab, setClickedTab] = useState(0)
    return (
        <div className = "navbar__container">
          <div className = "logo__container">
            <div className = "logo">
              <Tree style = {{width: "50px", fill: "#fff"}}/>
            </div>
            <div className = "logo__text">AlgoTracker</div>
          </div>
            {/* <div className = "navbar__buttons__container">
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
            </div> */}

        </div>
    )
}

export default NavBar
