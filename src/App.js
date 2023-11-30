// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let getParamsObject = ([...(new URLSearchParams(window.location.search))]).reduce((prev,curr)=>(Object.assign(prev,{[curr[0]]:curr[1]})),{})
  let decodedString = atob(getParamsObject.m)
  // decodedString = atob('dGhlIHpvbmU=')
  const [value] = useState(decodedString)

  return (
    <div className ="container">
    <span className="text1">make {value}</span>
    <span className="text2">Great Again!</span>
</div>
  );
}

export default App;
