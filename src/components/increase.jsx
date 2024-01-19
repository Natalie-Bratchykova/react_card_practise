import React from "react";
import "../styles/changeState.css"


export const ChangeState = (props) =>{
    // useState(initialStateValue,  trigger function() that will rerender that part of page)
    let state = React.useState(0)
    let [currentState, stateFunc] = state;

    // create function that will be called on specific action
    function increaseValue(){
        // change state as you need
        currentState++
        // call function from useState to rerender the value
        stateFunc(currentState);
    }

    function decreaseValue(){
        stateFunc(--currentState)
    }


 // call created function onClick attribute
    return (
        <div className="state__container">
            
            <button onClick={decreaseValue}>-</button>
            <p className="state__value">{currentState}</p>
            <button onClick={increaseValue}> +</button>
        </div>
    )
}

// challenge
// 1. Update time on clicking
// 2. Update time each second

export const ChangeTime = () =>{

    let [currentState, setTime] = React.useState("Current time");

   
    function changeTimeState(){
        currentState = new Date().toLocaleTimeString();
        setTime(currentState)
    }

    setInterval(changeTimeState, 1000)

    return(
        <div className="state__container column">
            <h2 className="state__title">Time state changes</h2>
            <h3 className="state__time">{currentState}</h3>
            <button onClick={changeTimeState}> Show time</button>
        </div>
    )
}