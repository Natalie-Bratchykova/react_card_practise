// import styles

import { Main } from "./components/main";
import { Login } from "./components/Login";
import "./App.css";

const isLogged = !false;

function App() {
  return (
    <div>
      {isLogged ? <Main/>: <Login/>}
  
    </div>
  );
}

export default App;
