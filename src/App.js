// import bootstrap from "bootstrap"
// import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Controller from "./component/Controller.js"
import Viewer from "./component/Viewer.js"
import {useState} from "react"

function App() {
  const[count, setCount] = useState(10000)
  const handleSetCount = (value) => {
    setCount(count+value)
  }


  return (
    <div className="App">
      <div className="container">
          <div className="alert alert-light">
            <h1>Simple Counter</h1>
          </div>
          <section>
            <Viewer count1={count}/>
          </section>
          <section>
            <Controller handleSetCount1={handleSetCount} />
          </section>
      </div>
    </div>
  );
}

export default App;
