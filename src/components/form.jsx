import React from "react";
import "../styles/login.css";

export const Form = () => {
  let [currentValue, setValue] = React.useState({
    firstName: "",
    LastName: "",
  });

  function handleChanges(e) {
    const {name, value} = e.target;

    setValue((prev) => {
      if (name === "firstName") {
        return {
          firstName: value,
          LastName: prev.LastName,
        };
      } else if(name === "lastName") {
        return {
          firstName: prev.firstName,
          LastName: value,
        };
      }
    });
  }

  // we write value ={updatedStateValue} for control that updated value and current value
  // in input are the same

  return (
    <form className="login__form">
      <h3 className="login__title">
        Hi, {currentValue.firstName} {currentValue.LastName}
      </h3>
      <input
        type="text"
        onChange={handleChanges}
        name="firstName"
        placeholder="input your first name"
        value={currentValue.firstName}
      />
      <input
        type="text"
        onChange={handleChanges}
        name="lastName"
        placeholder="input your last name"
        value={currentValue.LastName}
      />
      <button className="login__submit">Submit</button>
    </form>
  );
};
