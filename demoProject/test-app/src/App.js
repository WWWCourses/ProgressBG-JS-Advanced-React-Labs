import './App.css';

import ClassComponent from "./components/classComponent";
import JSXDemo from "./components/JSXdemo";
import HWComp from "./components/hwComp";


let todos = [
  {"title":"Todo1"},
  {"title":"Todo2"},
  {"title":"Todo3"}
]

// will make it work after "props" object topic
function TodoItem(){
  return <li>todos.title</li>
}


function App() {
  return (
    <div className="App">
      {/* <ClassComponent/><hr/>
      <JSXDemo/><hr/>
      <ul>
        {todos.map( (el,ind)=> <li key={ind}>{el.title}</li>)}
      </ul>
      <hr/> */}
      <HWComp/>
    </div>
  );
}

export default App;
