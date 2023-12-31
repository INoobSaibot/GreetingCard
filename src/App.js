import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import GreetingGenerator from "./pages/greeting-generator";

import './App.css';
let hackRanCount = 0;

function App(){
  useEffect(()=> {
    if(hackRanCount > 0) {return};
    hackRanCount++; // shouldnt need this, its a hack, idk why its running twice!
    // console.log(document)
    document.addEventListener('keydown', (e) => {
      handleKeyPress(e)
    }, true)
  }, );

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  let keyPressesArr = ''
  let timeOut = setTimeout(()=>{})
  const codes = [];
  function addCode(arr){
    codes.push(arr.toString().replace(/,/g, ''));
  }

  addCode(['ArrowUp', 'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'ArrowLeft'])
  addCode('abcd')
  addCode('iddqd')
  addCode('idkfa')
  addCode('abcd')
  // addCode('ab')


  const handleKeyPress = (e) => {
    // console.log(e)
    console.log(e.key)
    keyPressesArr = keyPressesArr.concat(e.key)
    clearTimeout(timeOut)
    timeOut = setTimeout( ()=> {
      keyPressesArr = ''
    },1500)

    codes.forEach((code)=> {
      if(keyPressesArr.includes(code)){
        handleCodePressed()
      }
    })

  }

  const handleCodePressed = () => {
    console.log('coooooodes')
    keyPressesArr = ''
    if(window.location.href.includes('/greeting-generator')){return}
    window.location.href = '/greeting-generator';
  }

  return <Router>
    <Routes>
      <Route exact path="/" element={<Greeting count={count}></Greeting>}></Route>
      <Route exact path="/greeting-generator" element={<GreetingGenerator></GreetingGenerator>}></Route>
    </Routes>
  </Router>
}


function Greeting() {
  let getParamsObject = ([...(new URLSearchParams(window.location.search))]).reduce((prev,curr)=>(Object.assign(prev,{[curr[0]]:curr[1]})),{})
  let decodedString = 'Greetings'

  console.log(`also now you can just type 'generateUrl('message') in the console to get a custom url made`)
  try {
    decodedString = atob(getParamsObject.m)
    if(decodedString.length === 0 ){
      decodedString = 'Greetings'
    }
  } catch(error) {
    // default handled above
    console.log(getParamsObject?.m?.length())
    if(! getParamsObject?.m){
      console.log('no params, use default')
    } else {
      console.error(`${getParamsObject?.m} can not be decoded from base 64 using atob function, is it correctly base 64 string using btoa function?`)
    }
  }

  const [value] = useState(decodedString)


  return (
      <div className ="container">
        <span className="text1">make {value}</span>
        <span className="text2">Great Again!</span>
      </div>
  );
}

export default App;
