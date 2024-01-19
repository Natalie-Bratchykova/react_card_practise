import React from "react";
import "../styles/login.css"

export const Form = () => {
  const grates = "Hello";
  let [currentValue, setValue] = React.useState(grates);

  // for changing on writing 
  function changeTitle(e) {
     currentValue = grates + " " + e.target.value;
   // setValue(currentValue);
  }

  // function for update on submitting 
  function updateOnSubmit(ev){
    ev.preventDefault();
    setValue(currentValue)
  }


  return (
    <form className="login__form">
      <h3 className="login__title">{currentValue}</h3>
      <input type="text" onChange={changeTitle}  placeholder="input your name" />
      <button className="login__submit" onClick={updateOnSubmit}>Submit</button>
    </form>
  );
};
