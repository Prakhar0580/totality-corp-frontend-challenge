import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context from "./Context";
import tachyons from 'tachyons';
import Card from "./Card";
import {Info} from "./Array";
import "./index.css";
ReactDOM.render(
  <>
  <Context>
  <App/>   
  </Context>
  
  
</>,
document.getElementById("root")
  
);
