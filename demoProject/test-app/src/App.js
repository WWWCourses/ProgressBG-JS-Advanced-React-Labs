import { useState } from "react";
import './App.css';

// import EventsDemo from "./components/eventsDemo";
import Forms from "./components/forms";
// import LifeCycles from "./components/lifeCycles";

function App() {
  const el = <Forms id="test"/>
  console.dir(el);

  const [shown, setShown] = useState(true);

  return (
    <div className="App">
      { shown ? <h1>Hdhsjhfsj</h1>: null}
      <button onClick={()=>setShown(false)}>Remove LifeCycle Comp</button>
    </div>
  );
}

export default App;
