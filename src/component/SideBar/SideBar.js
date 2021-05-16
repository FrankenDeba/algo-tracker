import React, { useState } from 'react'
import { ReactComponent as Dashboard } from "../../assets/dashboard.svg"
import { ReactComponent as Table } from "../../assets/table.svg"
import "./SideBarStyle.css"

function SideBar() {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className = "sidebar__container">
      <div className = "buttons__container">
        <div className = "button1__container" onClick = {() => setActiveTab(0)} 
        style = {{color: `${activeTab === 0 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}>
          <p>Dash</p>
          <div className = "button1">
            <Dashboard style = {{width: "100%", fill: `${activeTab === 0 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}/>
          </div>
        </div>
        <div className = "button2__container" onClick = {() => setActiveTab(1)} 
        style = {{color: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}>
          <p>Table</p>
          <div className = "button2">
            <Table style = {{width: "100%", fill: `${activeTab === 1 ? "#fff" : "rgba(255, 255, 255, 0.5)"}`}}/>
          </div>
        </div>
        
        <div className = "button3">
          
        </div>
      </div>
    </div>
  )
}

export default SideBar
