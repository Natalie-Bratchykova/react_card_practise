export const Card = (props) => {
  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <img className="card__image" src={props.src} alt={props.title}></img>
    </div>
  );
};
