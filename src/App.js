import CardsHolder from "./component/Home/CardsHolder"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Canvas from "./component/Particle/Particle"
import './App.css';
import { useEffect, useState } from "react";
import Table from "./component/Table/Table";
import NavBar from "./component/NavBar/NavBar";
import Modal from "./component/Modal/Modal";
// import vid from "./assets/video.mp4"
const worker = new Worker("worker.js")
// import Canvas from "./component/NavBar/NavBar";

function App() {
  const [word, setWord] = useState("ARRay")
  const [position, setPosition] = useState([0,0])
  const [showDetailsPopup, setShowDetailsPopup] = useState(null)
  // useEffect(async () => {
  //   const arr = ["array", "linked list", "graph"]
  //   const interval = setTimeout(async () => {
  //     await setWord(arr[Math.floor(Math.random() * 3)])
  //     await setPosition([Math.floor(Math.random() * 500), Math.floor(Math.random() * 700)])
  //   }, 3000)
  //   return () => clearTimeout(interval)
  // }, [word])
  useEffect(() => {
    worker.postMessage("connected")
    worker.onmessage = (e) => {
      console.log(e.data);
    }
    return () => {
      worker.terminate()
    }
  }, [])
  const data = [{
    sno: 1,
    ques: "test???"
  }]
  const showQuesDetails = (sno) => {
    console.log(sno);
    setShowDetailsPopup(data.find(d => d.sno === sno))
  }
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
  return (
    <div className = "App gradient-background">
      {/* <video autoplay muted loop id="myVideo">
        <source src={vid} type="video/mp4" />
      </video> */}
      {showDetailsPopup && 
      <Modal data = {showDetailsPopup} isSmallPopup  modalHeading = "Question Details"/>}
      <div style = {{...{position: "absolute", left: position[0], top: position[1]}, fontSize: "50px", color: "#fff"}}>{word}</div>
      {/* <Canvas /> */}
      <NavBar />
      <div className = "cards__holder">
        <CardsHolder />
      </div>
      {/* <Table showQuesDetails = {showQuesDetails} /> */}
    </div>
    
    // <Router>
    // <div className="App">
      
      
    //     {/* <div> */}
    //     <Particle />
    //     <Switch>
          
    //         {/* <CardsHolder /> */}
    //       {/* </Route> */}
    //       <Route path = "/table" component = {Test} />
    //         {/* <Test /> */}
    //       {/* </Route> */}
    //       <Route path = "/dashboard" component = {Dashboard} />
    //       <Route path = "/" exact component = {CardsHolder} />
    //         {/* <Dashboard /> */}
    //       {/* </Route> */}
    //     </Switch>
    //     {/* </div> */}
    // </div>
    // </Router>
  );
}

function Test() {
  return <div>test</div>
}

function Dashboard() {
  return <div>dashboard</div>
}

export default App;
