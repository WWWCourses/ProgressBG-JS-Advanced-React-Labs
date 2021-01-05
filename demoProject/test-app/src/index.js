// imports from Node Modules - no './' prefix in path:
import React from 'react';
import ReactDOM from 'react-dom';

// imports from project modules - prepend './' prefix in path:
import './index.css';
// import HeaderElement from "./components/reactIntro";
import FunctionComp from "./components/functionComponent";
import ClassComp from "./components/classComponent";

var element = React.createElement("h1", null, "Hello, world!");
// console.dir(element);

// ReactDOM.render( <FunctionComp/>, document.querySelector('#root'))
ReactDOM.render( <ClassComp/>, document.querySelector('#root'))