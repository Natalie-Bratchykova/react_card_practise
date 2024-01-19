// import styles
import "./App.css";
import { Main } from "./components/main";
import { Login } from "./components/Login";


const isLogged = false;

function App() {
  return (
    <div>
      {isLogged ? <Main/>: <Login/>}
    </div>
  );
}

export default App;
