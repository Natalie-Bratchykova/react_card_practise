// import styles
import "./App.css";
import {Card} from "./components/card";
import characters from "./characters";
import { emojies } from "./emojiInfo";
import { EmojiCard } from "./components/emojiCard";


function App() {
  return (
    <div>
      <h1>My react app</h1>
      <div className="cards">
        {characters.map((el) => (
          <Card key={el.id} title={el.title} src={el.src} />
        ))}
      </div>
      <h2> Another set of cards</h2>

<div className="cards">
  {
    emojies.map(el =>(
      <EmojiCard key = {el.id} emoji={el.emoji} title={el.title} text={el.text}  />
    ))
  }
</div>
    </div>
  );
}

export default App;
