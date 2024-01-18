import "../emoji.css";
export const EmojiCard = (props) => {
  return (
    <div className="emoji-card">
      <h2 className="emoji-card__emoji">{props.emoji}</h2>
      <h3 className="emoji-card__title">{props.title}</h3>
      <p className="emoji-card__text">{props.text}</p>
    </div>
  );
};
