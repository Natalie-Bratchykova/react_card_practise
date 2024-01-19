import { Input } from "./Input";

import "../styles/login.css";
export const Login = (props) => {

  return (
    <section className="login__section">
    <h2 className="login__title">Login</h2>
      <form className="login__form">
        <Input type="text" placeholder="Name" />
        <Input type="password" placeholder="Password" />
        <button type="button" className="login__submit" >
          Submit
        </button>
      </form>
    </section>
  );
};
