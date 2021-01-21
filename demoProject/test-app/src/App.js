import { useState } from 'react';
import './App.css';

// import Forms from "./components/forms";
import LifeCycles from "./components/lifeCycles";
import HooksDemo from "./components/hooksDemo";

function App() {
  const [shown,setShown]=useState(true);


  return (
    <div className="App">
      {shown?<LifeCycles id="test"/>:null}
      <button onClick={_=>setShown(!shown)}>Remove LifeCycles Component</button>
      <hr/>
      <HooksDemo/>
    </div>
  );
}

export default App;
