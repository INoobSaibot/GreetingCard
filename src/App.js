// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  let getParamsObject = ([...(new URLSearchParams(window.location.search))]).reduce((prev,curr)=>(Object.assign(prev,{[curr[0]]:curr[1]})),{})
  let decodedString = 'default message'
  console.log('use btoa("someMessageText"), then added it to the url like this... url?codedStringFromFunction')
  console.log(`${window.location.origin}?m=codedStringFrom_btoaFunction`)
  console.log(`${window.location.origin}?m=R3JlZXRpbmdz`)
  try {
  decodedString = atob(getParamsObject.m)
  } catch(error) {
    // default handled above
    if(! getParamsObject?.m){
      console.log('no params, use default')
    } else {
      console.error(`${getParamsObject?.m} can not be decoded from base 64 using atob function, is it correctly base 64 string using btoa function?`)
    }
  }
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
