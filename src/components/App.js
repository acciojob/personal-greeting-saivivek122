
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [value,setValue]=useState("")
  function userInputValue(event){
    let userInput=event.target.value
    if(userInput!=""){
      setValue("Hello ," + userInput + "!")
    }
    else{
      setValue("")
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
 
      <input onChange={userInputValue}/>
      <p>{value}</p>
    
    </div>
  )
}

export default App
