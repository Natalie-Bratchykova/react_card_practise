import { EmojiCard } from "./emojiCard";
import { emojies } from "../emojiInfo";
import { Card } from "./card";
import characters from "../characters";
import { ChangeState, ChangeTime } from "./increase";


import "../styles/main.css"
export const Main = (props) => {
  return (
    <main>
      <h1>My react app</h1>
      <div className="cards">
        {characters.map((el) => (
          <Card key={el.id} title={el.title} src={el.src} />
        ))}
      </div>
      <hr/>
      <h2> Another set of cards</h2>

      <div className="cards">
        {emojies.map((el) => (
          <EmojiCard
            key={el.id}
            emoji={el.emoji}
            title={el.title}
            text={el.text}
          />
        ))}
      </div>
      <div >
      <hr/>
        <h2> Learn how to use hooks</h2>
        <h3>useState</h3>
        <ChangeState/>
        <hr/>
        <ChangeTime/>
      </div>
    </main>
  );
};
